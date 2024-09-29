import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.6rem;
  text-align: left;
  background-color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const UploadIcon = styled.div`
  width: 50px;
  height: 50px;
  background: url("uploader.png") no-repeat center center;
  background-size: contain;
  margin-bottom: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const MainForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [file, setFile] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: make call to backend for uploading details of the user
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 5000);
  };

  return (
    <>
      <div className="maindev flex flex-col gap-2 ">
        <Title className="text-2xl font-bold mb-3 josefin-sans-bold">
          Create the career you love
        </Title>
        <Subtitle className="text-LightPrimaryColor josefin-sans-light text-sm">
          Be part of our innovative team and grow with us!
        </Subtitle>
        <Form className="w-full " onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <UploadContainer>
            <HiddenFileInput
              type="file"
              id="fileUpload"
              onChange={handleFileChange}
            />
            <UploadLabel htmlFor="fileUpload">
              <UploadIcon />
            </UploadLabel>
          </UploadContainer>
          <UploadButton type="submit" disabled={isButtonDisabled}>
            Upload Details
          </UploadButton>
        </Form>
      </div>
    </>
  );
};

export default MainForm;
