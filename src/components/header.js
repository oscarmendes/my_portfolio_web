
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    
    <div class ="navbar-container">

      <div class ="navbar-title">
          <h1 class ="header-font"> 
            <Link to="/"> {siteTitle} </Link>
          </h1>
      </div>

      <div class ="navbar-menu">

            <div class="header-font">
              <Link to ="/">Home</Link>
            </div>
            <div class="header-font">
              <Link to ="/about">About Me</Link>
            </div>
            <div class="header-font">
              <Link to ="/contact">Contact Me</Link>
            </div>
      
      </div>
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
