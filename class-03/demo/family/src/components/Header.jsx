import React from 'react';

/*
  props is:

  {
    title:"Our Family!"
  }

*/

function Header(props) {

  return (
    <header>
      <h1>{props.title}</h1>
      <div>We have {props.members} family members for you to meet</div>
    </header>
  )

}

export default Header;
