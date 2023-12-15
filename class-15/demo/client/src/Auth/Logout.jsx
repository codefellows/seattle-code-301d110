import {useAuth0} from '@auth0/auth0-react';

function LogoutButton() {

  const { isAuthenticated, logout } = useAuth0();

  function handleLogout() {
    logout();
  }

  return (
    isAuthenticated ? <button onClick={handleLogout}>Log Out</button> : null
  )

}

export default LogoutButton;
