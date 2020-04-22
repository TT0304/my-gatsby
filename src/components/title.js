import React from "react"
import styles from "./title.module.scss"

export default props => (
  <section className="lg-col-8 md-col-10 sm-col-12">
    <h1 className="display line-height-1 strong">{props.text}</h1>
    <div className={styles.subtitle}>{props.subtitle}</div>
  </section>
)
