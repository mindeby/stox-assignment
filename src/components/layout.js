/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <ul>
            <li><a>Reviews</a></li>
            <li><a>Contact</a></li>
            <li><a>Account</a></li>
          </ul>
          <span><b>Language:</b> EN &euro;</span>
          <span><b>Call</b> 020-2050738<br/>Mon - Thu, 9:00 - 19:00<br/>Fri, 9:00 - 18:00</span>
          <span><b>mail</b> onshallo&#64;aceandtate.nl<br/><b>whatsapp</b> +31 6 33236677</span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
