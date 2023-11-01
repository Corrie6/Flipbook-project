import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Sign in</button>
    )
  );
};
export default LoginButton;
