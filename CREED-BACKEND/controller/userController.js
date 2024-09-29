const { User } = require("../model/userModel");
const { hashPassword, comparePassword } = require("../helper/userHelper");
const JWT = require("jsonwebtoken");
const OTP = require("../model/OTP");
const otpGenerator = require("otp-generator");
const { Order } = require("../model/orderModel");
exports.registerController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, otp } = req.body;
    console.log(confirmPassword);
    //checking  user
    try {
      if (!name || !email || !password || !confirmPassword || !otp) {
        throw new Error({
          message: "Please Provide All Credentials",
        });
      }
      if (confirmPassword != password) {
        throw new Error({
          message: "Password Not Matched",
        });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({
        success: false,
        message: error.message,
      });
    }
    const existingUser = await User.findOne({ email });
    //checking existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already register please login",
      });
    }

    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

    if (response.length === 0) {
      return res.status(400).json({
        success: false,
        message: "OTP NOT Found",
      });
    } else if (otp !== response[0].otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);

    //save
    const user = await new User({
      name,
      email,
      password: hashedPassword,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    }).save();
    res.status(201).send({
      success: true,
      message: "User registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

// LOGIN

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Email or password invalid",
      });
    }
    //check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(501).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_KEY, {
      expiresIn: "7d",
    });
    return res.status(200).send({
      success: true,
      message: "login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// exports.updateProfileController = async(req,res)=>{
//   try {
//     const  {name,email,password,address,phone}  =req.body
//     const user = await User.findById(req.user._id);
//     if(password && password.length < 6){
//       return res.json({error:"Password is required and 6 character long"})
//     }
//     const hashedPassword = password ? await hashPassword(password):undefined
//     const updatedUser = await User.findByIdAndUpdate(req.user._id,{
//       name:name || user.name,
//       password : hashedPassword || user.password,
//       phone : phone || user.phone,
//       address : address || user.address
//     },{new:true})
//     res.status(200).send({
//       success : true,
//       message:"Profile Updated successfully",
//       updatedUser
//     })
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success:false,
//       message:"Error while updating profile",
//       error
//     })
//   }
// }

exports.deleteUserController = async(req,res)=>{
  try {
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Success in deleting user",
      
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting user",
      error,
    });
  }
}

exports.getOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Error in getting orders",
      error,
    });
  }
};

exports.getAllOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error in getting orders",
      error,
    });
  }
};

exports.orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true },
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating user status",
      error,
    });
  }
};
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const checkUserPresent = await User.findOne({ email }); //check if user already exist

    if (checkUserPresent) {
      //if user already exist , then return a response
      return res.status(401).json({
        success: false,
        message: "User already registered",
      });
    }

    var otp = otpGenerator.generate(4, {
      //generate otp of 4 digit number donot contain uppercase,lowercase,specialchar;
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);

    let result = await OTP.findOne({ otp: otp }); //check unique otp or not
    while (result) {
      // if result is true so we regenerate otp;
      otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
      });
    }

    const otpPayload = { email, otp };

    //create an entry in OTP in DB and this OTP is used in SignUp to find response;
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);

    res.status(200).json({
      //return response successful
      success: true,
      message: "OTP Sent Successfully",
      otp,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send({
      success: false,
      message: "Success in getting users",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting Users",
      error,
    });
  }
};

exports.findUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findById(id);
    res.status(200).send({
      success: true,
      message: "Fetched User Successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting Users",
      error,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      uid,
      description,
      price,
      category,
      discount,
      image,
      quantity,
    } = req.fields;
    console.log(image);
    if (
      (!name,
      !uid,
      !description,
      !price,
      !category,
      !discount,
      !image,
      !quantity)
    ) {
      return res.status(400).send({
        message: "Enter all details",
      });
    }
    let discountedPrice = (1 - discount / 100) * price;
    console.log(discountedPrice);
    const user = await User.find({ _id: id }).select("cart");

    // console.log(user);
    const found = user[0].cart.findIndex((item) => item.name === name);
    if (found > -1) {
      console.log(found);
      const cart = user[0].cart;
      let qty = parseInt(user[0].cart[found].quantity);
      // Number(qty);
      const updatedUser = await User.updateOne(
        { _id: id, "cart.uid": uid },
        { $set: { "cart.$.quantity": qty + 1 } },
      );
      console.log(qty);
      return res.status(201).send({
        success: true,
        message: "Success",
      });
    } else {
      console.log("not found");
      const u = await User.findById(id);
      console.log(u);
      const updateUser = await User.updateOne(
        { _id: id },
        {
          $push: {
            cart: {
              name,
              uid,
              description,
              discountedPrice,
              category,
              image,
              quantity,
            },
          },
        },
      );
      console.log(updateUser);
      // await u.save();
      return res.status(201).send({
        success: true,
        message: "Created Successfully",
        u,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Creating Cart",
      error,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await User.findById(id).select("cart");
    res.status(200).send({
      success: true,
      message: "Fetched Cart Successfully",
      cart,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Cart",
      error,
    });
  }
};

exports.deleteInCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { uid } = req.body;
    const cart = await User.findById(id).select("cart");
    const updatedUser = await User.updateOne(
      { _id: id },
      { $pull: { cart: { uid } } },
    );
    console.log(updatedUser);
    // await cart.save();
    res.status(201).send({
      success: true,
      message: "Deleted Successfully",
      cart,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting cart",
      error,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { qty, uid } = req.body;
    const cart = await User.findById(id).select("cart");
    const updatedUser = await User.updateOne(
      { _id: id, "cart.uid": uid },
      { $set: { "cart.$.quantity": qty } },
    );
    console.log(updatedUser);
    res.status(200).send({
      success: true,
      message: "Successfull",
      cart,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updating cart",
      error,
    });
  }
};

exports.resetCart = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const cart = await User.updateOne({ _id: id }, { $set: { cart: [] } });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Sucessfully empty cart",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Reseting Cart",
      error,
    });
  }
};
