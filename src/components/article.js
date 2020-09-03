import React from "react"
import { Link } from "gatsby"
import styles from "./article.module.css"

export default props => (
  <li className="list-style-none grid-item">
    <p className="text-blue uppercase sans-serif mb2 bold small">
      {props.category}
    </p>
    <h4 className="big display medium">{props.title}</h4>
    <p class="sans-serif line-height-4 quiet mb1 grid-txt">{props.excerpt}</p>
    <Link to={props.to} className="darken1-hover">
      {/* <div className={styles.left}>
          <img
            src={"https://source.unsplash.com/150x150/?" + props.category}
            alt={props.title}
          />
        </div> */}
      {/* <div className={styles.right}>
        
        <div className={styles.date}>{props.date}</div>
        
      </div> */}
    </Link>
  </li>
)
