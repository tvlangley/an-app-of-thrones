import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <Link to='/'><h1>An App of Thrones</h1></Link>
      </header>
    )
  }
}

export default Header
