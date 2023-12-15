import { withAuth0 } from '@auth0/auth0-react';

import AuthButtons from './Auth/Buttons.jsx';

import Content from './Content.jsx';

function App(props) {
    console.log(props);
    return(
      <>
        <h1>Our App</h1>
        <AuthButtons />
        <hr />
        {
          props.auth0.isAuthenticated &&
            <>
              <Content />
            </>
        }
      </>
    )
}


// export default App;
export default withAuth0(App);
