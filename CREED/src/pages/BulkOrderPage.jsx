import { useState } from "react";
import toast from "react-hot-toast";
import "../styles/BulkOrderPage.scss";
import { useSelector } from "react-redux";
const BulkOrderPage = () => {
  const { categories } = useSelector((state) => state.category);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pinCode: "",
    productRequired: "",
    quantity: "",
    targetPrice: "",
    timeline: "",
    reason: "",
  });
  const {
    fullName,
    email,
    phone,
    pinCode,
    productRequired,
    quantity,
    targetPrice,
    timeline,
    reason,
  } = formData;
  function handleOnChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleReset() {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      pinCode: "",
      productRequired: "",
      quantity: "",
      targetPrice: "",
      timeline: "",
      reason: "",
    });

    toast.success("Reset Details");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // FIX: make api call and then show error in toast

    toast.success("Bulk Order Sended Successfully.");
    toast.error("Error Sending Details ");
  };

  return (
    <>
      <div className="bulk_section_inner pt-10 pb-32">
        <div className="header_wrapper">
          <div className=" text-4xl font-bold">Bulk Order</div>
        </div>
        <div className="formstate" style={{ boxSizing: "border-box" }}>
          <form
            onSubmit={handleSubmit}
            method="post"
            action="/contact#ContactForm-template--15263579570219__bulk_order"
            id="ContactForm-template--15263579570219__bulk_order"
            acceptCharset="UTF-8"
            className="contact-form"
          >
            <input type="hidden" name="form_type" value="contact" />
            <input type="hidden" name="utf8" value="✓" />
            <div className="contact__fields">
              <input
                id="ContactForm-template--15263579570219__bulk_order-fname"
                className="field__input"
                type="hidden"
                name="contact[Form Type]"
                value="Bulk Query"
              />
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-name"
                  className="label1"
                >
                  Full Name<span>*</span>
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-name"
                  value={fullName}
                  className="field__input required"
                  autoComplete="name"
                  type="text"
                  name="fullName"
                  onChange={handleOnChange}
                  placeholder="Type here"
                  required="required"
                />
              </div>
              <div className="field field--with-error">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-email"
                  className="label1"
                >
                  Email<span>*</span>
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-email"
                  autoComplete="email"
                  value={email}
                  type="email"
                  className="field__input required"
                  name="email"
                  onChange={handleOnChange}
                  spellCheck="false"
                  autoCapitalize="none"
                  aria-required="true"
                  placeholder="Type here"
                  required="required"
                />
              </div>
            </div>
            <div className="form_fields_wrapper">
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-phone"
                  className="label1"
                >
                  Phone Number<span>*</span>
                </label>
                <div className="wsphone_number">
                  <span className="label1">+91</span>
                  <input
                    id="ContactForm-template--15263579570219__bulk_order-phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleOnChange}
                    className="field__input required"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    placeholder="Type here"
                    required="required"
                  />
                </div>
              </div>
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-pincode"
                  className="label1"
                >
                  Pin Code<span>*</span>
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-pincode"
                  type="tel"
                  className="field__input required"
                  name="pinCode"
                  value={pinCode}
                  onChange={handleOnChange}
                  maxLength="6"
                  placeholder="Type here"
                  required="required"
                />
              </div>
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-productname"
                  className="label1"
                >
                  Product Required<span>*</span>
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-productname"
                  className="field__input"
                  type="text"
                  name="productRequired"
                  value={productRequired}
                  onChange={handleOnChange}
                  placeholder="Type product name here"
                  required="required"
                />
              </div>
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-qtyrequired"
                  className="label1"
                >
                  Quantity Required<span>*</span>
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-qtyrequired"
                  type="number"
                  className="field__input required"
                  min="5"
                  max="999999"
                  name="quantity"
                  value={quantity}
                  onChange={handleOnChange}
                  placeholder="Type here"
                  required="required"
                />
              </div>
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-targetedprice"
                  className="label1"
                >
                  Procurement Target Price
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-targetedprice"
                  className="field__input"
                  type="text"
                  name="targetPrice"
                  value={targetPrice}
                  onChange={handleOnChange}
                  maxLength="100"
                  placeholder="Type here"
                />
              </div>
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="label1"
                >
                  Tentative Timelines for Placing the Order
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="field__input"
                  type="text"
                  name="timeline"
                  value={timeline}
                  onChange={handleOnChange}
                  maxLength="100"
                  placeholder="Type here"
                />
              </div>
              <div
                style={{ width: "100% ", fontWeight: "lighter" }}
                className="field full_width"
              >
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-body"
                  className="label1"
                >
                  Requirement Reason<span>*</span>
                </label>
                <textarea
                  id="ContactForm-template--15263579570219__bulk_order-body"
                  rows="10"
                  className="text-area field__input required"
                  name="reason"
                  value={reason}
                  onChange={handleOnChange}
                  required="required"
                  placeholder="Type here"
                ></textarea>
              </div>
            </div>
            <div className="contact__button">
              {/* <button type="submit" className="button">
        Send message */}
              {/* </button> */}
              <button
                className='button_cart1
       relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        px-4 py-2 font-semibold
       uppercase transition-all duration-500

       before:absolute before:inset-0
       before:-z-10 before:translate-x-[150%]
       before:translate-y-[150%] before:scale-[2.5]
       before:rounded-[100%] before:bg-SecondaryColor
       before:transition-transform before:duration-1000
       before:content-[""]

       hover:scale-105 hover:text-[#002d46]
       hover:before:translate-x-[0%]
       hover:before:translate-y-[0%]
       active:scale-95'
                type="submit"
              >
                SEND MESSAGE
              </button>
              <button
                className='button_cart1
       relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px]
        px-4 py-2 font-semibold
       uppercase transition-all duration-500

       before:absolute before:inset-0
       before:-z-10 before:translate-x-[150%]
       before:translate-y-[150%] before:scale-[2.5]
       before:rounded-[100%] before:bg-SecondaryColor
       before:transition-transform before:duration-1000
       before:content-[""]

       hover:scale-105 hover:text-[#002d46]
       hover:before:translate-x-[0%]
       hover:before:translate-y-[0%]
       active:scale-95'
                type="button"
                onClick={handleReset}
              >
                <span>RESET</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BulkOrderPage;
