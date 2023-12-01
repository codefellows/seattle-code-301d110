import {useState} from 'react';

function CityForm(props) {

  const [city, setCity] = useState('');
  const [showHeading, setShowHeading] = useState(false);

  function handleChange(e) {
    setShowHeading(false);
    setCity( e.target.value );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowHeading(true);
    props.handleChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>What City Are You In?</span>
        <input onChange={handleChange} placeholder="Seattle, WA" />
      </label>
      {
        showHeading && props.city && <h2>Information about {props.city} Below</h2>
      }
    </form>
  )
}

export default CityForm;
