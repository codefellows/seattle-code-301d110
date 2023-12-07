import {useState} from 'react';

function Form(props) {

  const [search, setSearch] = useState('');

  function handleChange(e) { 
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Search..." onChange={handleChange} />
    </form>
  )

}

export default Form;