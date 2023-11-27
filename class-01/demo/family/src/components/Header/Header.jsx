import React from 'react';

import styles from './header.module.css';

// props are "fed" to a component from a parent
// We can render them using {props.xxxx}
function Header( props ) {
  return (
    <header className={styles.hdr}>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header;
