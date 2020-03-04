import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categories"
const data = require('../data')

const IndexPage = () => (
  <Layout>
    <Categories data={data}></Categories>
    <SEO title="Home" />
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
