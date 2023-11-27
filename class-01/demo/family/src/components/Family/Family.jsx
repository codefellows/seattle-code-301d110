import React from 'react';
import Person from '../Person/Person.jsx';
import styles from "./family.module.css";
import logo from "../../assets/react.svg";

function Family() {
  return (
    <div className={styles.family}>
      <ul>
        <Person name="John" age="55" />
        <Person name="Cathy" age="NaN" />
        <Person name="Allie" age="18" />
        <Person name="Zach" age="25" />
      </ul>

      <img src={logo} />
    </div>
  )
}

export default Family;
