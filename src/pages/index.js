import React from "react"
import Layout from "../components/Layout"
import Intro from "../components/intro"
import ArticleList from "../components/article-list-homepage"
import Portfolio from "../components/portfolio-select"

export default () => (
  <Layout width="constrained" pageType="page" headerPosition="right">
    <section class="content-block mt4 mb5">
      <div class="container max-width-4">
        <Intro>Making speedy, useful things that they want to revisit.</Intro>
      </div>
    </section>
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
