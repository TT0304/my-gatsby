import React from "react"
import introStyles from "./intro.module.scss"

export default function Intro({children}) {
  return (
    <div className={introStyles.intro}>
      <h2>{children}</h2>
    </div>
  )
  
}