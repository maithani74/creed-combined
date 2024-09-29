const bcrypt = require('bcrypt');

exports.hashPassword = async(password)=>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }catch(err){
        console.log(err)
    }
}

exports.comparePassword = async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}