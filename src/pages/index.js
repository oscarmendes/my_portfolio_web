import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my website</h1>
    <p>Front End Developer</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
