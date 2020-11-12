import React from "react"
import Seo from '../Seo';
import Header from '../Header'
import Letswork from '../Letswork'
import Footer from '../Footer'
// import styles from "./Layout.module.scss"

export default function Layout ({ children, width, pageType, title, description, socialImg }) {
  const classname = width === "max" ? "max-width-4 mx-auto" : "";
  return (
    <div id={pageType} className="layout">
      <Seo title={title} description={description} socialImg={socialImg} />
      {pageType === 'page'
      ? <Header />
      : null}
      <main className={classname}>
        {children}
      </main>
      <Letswork />
      <Footer />
    </div>
  )
}
