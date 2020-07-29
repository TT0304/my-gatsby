import React from 'react'
import styles from './footer.module.scss'

export default ({ children }) => (

  <footer className={`pt3 ${styles.container}`}>
    <div className={styles.footer}>{children}
    </div>
    <div>
      <a class={`mr2 ${styles.socialMedia__link}`}>Github</a>
      <a class={`mr2 ${styles.socialMedia__link}`}>Twitter</a>
      <a class={`mr2 ${styles.socialMedia__link}`}>Email</a>
    </div>
  </footer>

)