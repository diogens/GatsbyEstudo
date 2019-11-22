import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="blue"
      category="Misc"
      date="22 de novembrom de 2019"
      timeToRead="5"
      title="Diga não ao Medium: tenha sua propria plataforma"
      description="Algumas razões para você ter ....."
    />
  </Layout>
)

export default IndexPage
