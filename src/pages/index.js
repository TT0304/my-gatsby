import React from "react"
import Layout from "../components/Layout"
import Intro from "../components/intro"
import FeaturedArticles from "../components/FeaturedArticles"
import Portfolio from "../components/portfolio-select"

export default () => (
  <Layout width="fixed" pageType="page" headerPosition="right">
    <section class="content-block mt4 mb4 lg-mb6">
      <Intro>Making speedy, useful things that they want to revisit.</Intro>
    </section>
    <section className="hp-secondary width-full">
      <h2 className="center section-title">
        <span>Featured Projects</span>
      </h2>
      <Portfolio />
    </section>
    <section className="hp-tertiary width-full mx-auto">
      <h2 className="center section-title">
        <span className="honeydew">Useful Read</span>
      </h2>
      <FeaturedArticles />
    </section>
  </Layout>
)
