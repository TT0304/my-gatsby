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
  hasMargin,
  title,
  description,
  socialImg,
  headerPosition,
}) {
  // const mainClass = width === "fixed" ? "container" : "none"
  const mainClass = ["main"]
  if (width === "fixed") {
    mainClass.push("container")
  }
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
      <main className={mainClass.join(" ")} width={width}>
        {children}
      </main>
      <Letswork />
      <Footer />
    </div>
  )
}
