import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ContactContext } from "../../contexts/Context";

export const ContactCreateForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const { createNewContact } = useContext(ContactContext);

  function handleSubmission(e) {
    e.preventDefault();
    createNewContact({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      profilePic,
    });
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmission}>
        <div>
          <Avatar src={profilePic} alt="Profile preview." />
        </div>
        <div>
          <div>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Profile Picture Url"
              name="profilePic"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            />
          </div>
          <ButtonWrapper>
            <Button type="submit">Add Contact</Button>
          </ButtonWrapper>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ddd;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 25px;
`;

const Form = styled.form`
  display: flex;
  padding: 50px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-right: 35px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1.5px solid black;
  background-color: #ddd;
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 15px;
  width: 300px;
`;

const ButtonWrapper = styled.div`
  margin: 15px 0 20px 0;
`;

const Button = styled.button`
  text-transform: uppercase;
  font-size: 1.1rem;
  padding: 10px 20px;
  background-color: #bbb;
  border: none;
  box-shadow: 0px 3px 8px #888;
  font-weight: 500;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export default ContactCreateForm;
