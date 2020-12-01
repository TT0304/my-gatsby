import React from "react"
import introStyles from "./intro.module.scss"

export default function Intro({ children }) {
  return (
    <div class="row">
      <div class="column column__spacer" data-xl-width="4"></div>
      <div
        class="column"
        data-xl-width="8"
        data-lg-width="8"
        data-md-width="10"
      >
        <div className={`medium pt3 ${introStyles.intro}`}>
          <h2 className={introStyles.heading}>{children}</h2>
        </div>
      </div>
    </div>
  )
}
