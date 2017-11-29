import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SidebarMenu.css'
import closeIcon from '../../img/close-menu-icon.svg'

export default class SidebarMenu extends Component {
  static propTypes = {
    closeNav: PropTypes.func,
  }

  toggleNav = () => {
    this.props.closeNav()
  }

  render() {
    const { navVisible } = this.props

    let showMenuItems = ''
    let showNav = ''
    let showCache = ''
    navVisible
      ? (showMenuItems = '')
      : (showMenuItems = 'sidebarmenu-item-hidden')
    navVisible ? (showNav = '') : (showNav = 'sidebarmenu-hidden')
    navVisible ? (showCache = '') : (showCache = 'sidebarmenu-cache-hidden')

    return (
      <div>
        <div className={`sidebarmenu-cache ${showCache}`}
        onClick={this.toggleNav}/>
        <nav className={`sidebarmenu ${showNav}`}>
          <div className="sidebarmenu-close-wrap" onClick={this.toggleNav}>
            <img
              className="sidebarmenu-icon"
              src={closeIcon}
              onClick={this.toggleNav}
              alt="Menu"
            />
          </div>
          <ul className="sidebarmenu-list">
            <li className={`sidebarmenu-item ${showMenuItems}`}>
              <a href="/library" className="sidebarmenu-link">
                Library
              </a>
            </li>
            <li className={`sidebarmenu-item ${showMenuItems}`}>
              <a href="/recents" className="sidebarmenu-link">
                Recent Work
              </a>
            </li>
            <li className={`sidebarmenu-item ${showMenuItems}`}>
              <a href="/worldwide" className="sidebarmenu-link">
                Worldwide
              </a>
            </li>
            <li className={`sidebarmenu-item ${showMenuItems}`}>
              <a href="/about" className="sidebarmenu-link">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
