import { useState } from 'react'

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import People from './components/People.jsx';

import people from './assets/family.json'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <main>
      <Header title="Our Family!" members={people.length} />
      <People list={people} />
      <Footer content="Copyright 2023: John and the 301's" />
    </main>
  )

}

export default App;
