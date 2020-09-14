import React from 'react'
import styles from './Body.module.scss'

export default function Body({ body, readingTime }) {
  return (
    <div className={styles.postBody}>
      <div className={styles.postBody__wrapper}>
        <div className={styles.postBody__container}>
          <div className={styles.postBody__sidebar}>
            <div className={styles.readingTime}>
            {`${readingTime} min remaining`}
            </div>
          </div>
          <div className={`${styles.postBody__content} line-height-5`} dangerouslySetInnerHTML={{ __html: body}}></div>
        </div>
      </div>
    </div>
  )
}