import React from "react"
import Seo from "../Seo"
import Header from "../Header"
import Letswork from "../Letswork"
import Footer from "../Footer"
// import styles from "./Layout.module.scss"

export default function Layout({
  children,
  width,
  pageType,
  title,
  description,
  socialImg,
  headerPosition,
}) {
  const mainClass = width === "constrained" ? "container" : "none"
  return (
    <div
      id={pageType}
      // className={`layout relative ${
      //   width === "constrained" ? "width-constrained mx-auto" : "width-auto"
      // }`}
      className="relative width-auto"
    >
      <Seo title={title} description={description} socialImg={socialImg} />
      {/* {pageType === "page" ? <Header position={headerPosition} /> : null} */}
      <Header position={headerPosition} />
      <main>{children}</main>
      <Letswork />
      <Footer />
    </div>
  )
}
