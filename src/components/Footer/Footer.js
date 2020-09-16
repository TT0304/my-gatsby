import React from 'react'
import styles from './Footer.module.scss'

export default function Footer ({ children }) {
  const smList = ['Twitter', 'Github'];
  // const url = `https://${smList.toLowerCase()}.com/bytrangle`;
  return (
    <footer className={`pt3 pb3 ${styles.footer}`}>
      <p className="normal monospace">Too much, too soon? Connect with me on
        <ul className={`${styles.socialMedia} huge flex p0 list-style-none`}>
        {smList.map((item, index) => (
          <li key={index} className={`${styles.socialMedia__li} inline`}>
            <p className={`${styles.socialMedia__wrapper} mt0`}>
              <a href={`https://${item.toLowerCase()}.com/bytrangle`} target="_blank" rel="noopener noreferrer">
                {item} ➚
              </a>
             </p>
          </li>
        ))}
        </ul>
      </p>
    </footer>
  )
}