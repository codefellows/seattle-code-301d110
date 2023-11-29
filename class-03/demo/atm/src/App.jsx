import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

import Child from './Child.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const defaults = {
  "Zach": 0,
  "Allie": 0
};

function App() {

  const [dollars, setDollars] = useState(1000);
  // Original (one and only 1 kid)
  // const [childsMoney, setChildsMoney] = useState(0);

  // Handle multiple kids
  const [childsMoney, setChildsMoney] = useState(defaults);

  function transferMoney(name, amount) {
    // 1. Remove the amount from our dollars
    setDollars( dollars - amount);

    // 2. Add the amount to the childsMoney
    // Childs Money looks like:
    /*
      {
        Zach: 50,
        Allie: 90
      }
    */
    // Can't do this, but want to:
    // childsMoney[name] = childsMoney[name] + amount;
      // React will not allow you to change state directly
      // We have to use the set method do that

    // Set anything takes as a parameter the NEXT STATE

    // Make a copy of current state
    const newMoneyObject = {...childsMoney};
    // Modify the copy
    newMoneyObject[name] = newMoneyObject[name] + amount;
    // Replace state with the updated copy
    setChildsMoney(newMoneyObject);

    // Doing this as a straight value, before we had objects
    // setChildsMoney( childsMoney + anount );

    // Potential Constraints
    // If the child balance is < 10, allow it
    // If they make more than x requests per day, refuse
    // If our dolars are less than 500, refuse
  }


  return (
    <>
      <CardGroup>
        <Card style={{width:"15rem"}}>
          <Card.Body>
            <Card.Title>
              Parent
            </Card.Title>
            <Card.Text>
              I am the parent, I have {dollars} in the bank.
            </Card.Text>
          </Card.Body>
        </Card>
        <Child
          name="Zach"
          handleTransfer={transferMoney}
          money={childsMoney.Zach}
        />
        <Child
          name="Allie"
          handleTransfer={transferMoney}
          money={childsMoney.Allie}
        />
      </CardGroup>
    </>
  )
}

export default App
