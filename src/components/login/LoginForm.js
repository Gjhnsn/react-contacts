import { useContext, useState } from "react";
import styled from "styled-components";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();

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
        <LoginButton type="submit">Login</LoginButton>
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

const LoginButton = styled.button`
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

export default LoginForm;

// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     }

//     handleInputChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleFormSubmit(event) {
//         event.preventDefault();

//     }

//     render() {
//         return (
//             <form onSubmit={this.handleFormSubmit}>
//                 <div>
//                     <label htmlFor="username">Username</label>
//                     <input
//                         id="username"
//                         name="username"
//                         type="text"
//                         placeholder="Username"
//                         value={this.state.username}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         placeholder="Password"
//                         value={this.state.password}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Login</button>
//                 </div>
//             </form>
//         )
//     }
// }
