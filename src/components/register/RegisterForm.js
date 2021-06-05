import { useState } from "react";
import styled from "styled-components";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
    console.log("Submitted: ', e");
  }

  return (
    <FormBox onSubmit={handleSubmission}>
      <InputWrapper>
        <label htmlFor="username"></label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password"></label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <ButtonWrapper>
        <RegisterButton type="submit">Register</RegisterButton>
      </ButtonWrapper>
    </FormBox>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1.5px solid black;
  font-size: 1rem;
  padding: 2px;
  width: 300px;
`;

const InputWrapper = styled.div`
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  margin: 15px 0 20px 0;
`;

const RegisterButton = styled.button`
  text-transform: uppercase;
  font-size: 1.1rem;
  padding: 10px 20px;
  background-color: #bbb;
  border: none;
  box-shadow: 0px 3px 8px #aaa;
  font-weight: 500;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export default RegisterForm;
