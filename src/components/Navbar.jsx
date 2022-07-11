import React, { useState } from "react"
import { links, social } from "./data"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <header>
        <div className='logo'>
          <h1>GorkCoder</h1>
        </div>
        <nav className={`${show ? "mobile-nav" : "list"}`}>
          <ul>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='socialIcons'>
          <ul>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='toggleBtn'>
          <button onClick={() => setShow(!show)}>{show ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
        </div>
      </header>
    </>
  )
}

export default Navbar
