import * as React from "react"
import { Link } from "gatsby"
import {StyleWraper} from './layout.styles.js'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <StyleWraper>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      </StyleWraper>
    )
  } else {
    header = (

      <StyleWraper>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
     </StyleWraper>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
