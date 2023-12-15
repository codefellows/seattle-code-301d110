import {useAuth0} from '@auth0/auth0-react';

function LoginButton() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return (
    isAuthenticated ? null : <button onClick={handleLogin}>Log In</button>
  )

}

export default LoginButton;
