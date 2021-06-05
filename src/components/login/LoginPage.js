import LoginForm from "./LoginForm";
import styled from "styled-components";

const LoginPage = (props) => {
  return (
    <Wrapper>
      <LoginWrapper>
        <LoginForm />
        <LinkWrapper>
          <p>
            Don't have an account? <a href="/register">Register</a>.
          </p>
        </LinkWrapper>
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ddd;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  background-color: white;
  padding: 30px 130px;
  box-shadow: 0px 8px 5px #aaa;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default LoginPage;
