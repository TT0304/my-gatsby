import React from "react"
import Layout from "../components/Layout"
import Intro from "../components/intro"
import ArticleList from "../components/article-list-homepage"
import Portfolio from "../components/portfolio-select"

export default () => (
  <Layout width="max" pageType="page">
    <Intro>
      Hey there. I am Trang Le, a front-end developer. I work with result-driven folks who are sick of shiny websites which no one returns to.
      
    </Intro>
    <section className="hp-secondary">
      <h2 className="center section-title">
        <span>Featured Projects</span>
      </h2>
      <Portfolio />
    </section>
    <section className="hp-tertiary pt3 mb4 mx-auto">
      <h2 className="center section-title">
        <span className="honeydew">Recently I've Learned</span>
      </h2>
      <ArticleList />
    </section>
  </Layout>
)
