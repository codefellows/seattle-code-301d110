import { useState } from 'react'
import axios from 'axios';

import Photos from './components/Photos.jsx';
import Form from './components/Form.jsx';

import './styles.css';


function App() {

  const [search, setSearch] = useState('');

  function handleForm(searchTerm) {
    setSearch(searchTerm);
  }

  return (
    <>
      <h1>Photo Search</h1> 
      <Form handleSubmit={handleForm} />
      <Photos search={search} />

      {/* <Weather location={} />
      <Movies location={} />
      <Map location={} /> */}
    </>
  )
}

export default App
