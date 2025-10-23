

import { useState } from 'react'

import styles from './App.module.css';


import CookieClicker from './components/CookieClicker.jsx';
import UserList from './components/UserList.jsx';
import CatFacts from './components/CatFacts.jsx';

function App() {
  

  return (
    <>
      <section className={styles.cookieSection}>
        <CookieClicker/>

      </section>
      <section className={styles.catFactSection}>
        <CatFacts/>

      </section>
      <section className={styles.userListSection}>
        <UserList/>
        
      </section>
    </>
  )
}

export default App
