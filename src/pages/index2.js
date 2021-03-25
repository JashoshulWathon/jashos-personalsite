import React from 'react'
import style from './global.module.scss'
import { Link } from 'gatsby'

// Components
import Layout from '../components/Layout'

// img
import cover from '../../static/assets/cover.jpg'

const Index = () => {
  return (
    <Layout>
      <div className={style.content}>
        <div>
          <h2 className={style.title}>Hello,</h2>
          <p>I am Jashoshul Wathon, an artist/designer based in Semarang focused on UX/UI design and illustration</p>
          <Link className={style.btn} to="/blog">View work</Link>
        </div>
        <img className={style.img} src={cover}></img>
      </div>
    </Layout>
  )
}

export default Index

