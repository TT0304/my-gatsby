import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Title from "../components/title"

export default () => (
  <Layout>
    <div>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
    </div>
    <p>Hello world!</p>
  </Layout>
)
