import React from 'react'
import style from './footerStyle.module.scss'

/**
 * Footer Component
**/

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.contactWrapper}>
          <div className={style.contact}>
            <h3>Let’s work together</h3>
            <a href="">jashoshulwathon@gmail.com</a>
          </div>
          <div className={style.contact}>
            <h3>Find me here</h3>
            <ul>
              <li>
                <a href="">Dribbble</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        Designed and Coded by Jashoshul Wathon © {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
