import { FormBox } from "./components";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import { LoginProvider } from "./context";

function Login() {
  
  return (
    <LoginProvider>
      <LoginContainer>
        <FormBox />
      </LoginContainer>
    </LoginProvider>
  );
}

export default Login;
