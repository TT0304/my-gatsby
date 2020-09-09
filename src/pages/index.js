import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Intro from "../components/intro"
import ArticleList from "../components/article-list-homepage"
import Portfolio from "../components/portfolio-select"

export default () => (
  <Layout>
    {/* <Title text="Welcome" /> */}
    <Intro>
      Hey there. I am Trang Le, a front-end developer who's always looking for ways to make apps faster and more useful.
      
    </Intro>
    <section className="hp-secondary">
      <h2 className="center section-title">
        <span>Featured Projects</span>
      </h2>
      <Portfolio />
    </section>
    <section className="max-width-3 main-content hp-tertiary pt3">
      <h2 className="center section-title">
        <span>Recently I've Learned</span>
      </h2>
      <ArticleList />
    </section>
  </Layout>
)
