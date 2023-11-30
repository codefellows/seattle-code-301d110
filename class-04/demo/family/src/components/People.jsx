import React from 'react';

import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Person from './Person.jsx';

class People extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'The Cokos Clan',
      address: 'Lynnwood, Wa',
      family: props.list,
      displayFamily: props.list,
    };

  }

  changeAddress = () => {
    // setAddress isn't a thing
    // We have to use this.setState()
    this.setState( {...this.state, address:"Wenatchee, WA"} );
  }

  handleFilter = (e) => {
    let age = e.target.value;
    let filteredFamily = this.state.family.filter( person => person.age >= age );
    console.log(filteredFamily);
    this.setState( {...this.state, displayFamily:filteredFamily} );
  }

  render() {

    return (
      <>
        <h2>Meet {this.state.name} from {this.state.address}</h2>
        <div>
          <button onClick={this.changeAddress}>Change</button>
        </div>
        <Form>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="number"
            id="age"
            placeholder="Enter Age"
            onChange={this.handleFilter}
            aria-describedby="passwordHelpBlock"
          />
        </Form>

        <CardGroup>

          {
            this.state.displayFamily.map( person =>
              <Person
                handleSelectPerson={this.props.handleSelectPerson}
                key={person._id}
                person={person}
              />
            )
          }
        </CardGroup>
      </>
    )

  }

}


export default People;
