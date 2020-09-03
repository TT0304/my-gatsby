import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"

// HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
)

// HomeButton component
const Tagline = props => {
  const {text} = props;
  const words = text.split(',');
  const divisible = words.length > 1;
  return (
    <div className={styles.tagline}>
    {divisible
    ? <h1 className={styles.shadow}>
      {/* {words.map((item, index) => <div className={styles.block} key={index}>{item}</div>)} */}
      {words.map((item, index) => <>{item}<br /></>)}
      </h1>
    : <h1>{props.text}</h1>}
    </div>
  );
  
}

// SocialButton component
const SocialButton = props => {
  let style = ""
  let url = ""

  if (props.site === "twitter") {
    style = styles.buttonTwitter
    url = "https://twitter.com/" + props.username
  } else if (props.site === "linkedin") {
    style = styles.buttonLinkedin
    url = "https://www.linkedin.com/in/" + props.username
  } else if (props.site === "github") {
    style = styles.buttonGithub
    url = "https://www.github.com/" + props.username
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <Tagline text={data.site.siteMetadata.title} />
        <div className={styles.row}>
          <SocialButton site="github" username="evangeloper"></SocialButton>
          <SocialButton site="linkedin" username="evangeloper"></SocialButton>
          <SocialButton site="twitter" username="evangeloper"></SocialButton>
        </div>
        <div className={styles.row}>
          <HeaderLink to="/journal" text="JOURNAL" />
          <HeaderLink to="/about" text="ABOUT" />
        </div>
      </header>
    )}
  />
)
