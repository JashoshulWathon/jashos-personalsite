import React from 'react'
import style from './global.module.scss'
import { Link } from 'gatsby'

// Components
import Layout from '../components/Layout'
import WorkCard from '../components/WorkCard'

// img
import cover from '../../static/assets/cover.jpg'

const Index = () => {
  return (
    <Layout>
      <div className={style.content}>
        <h2 className={style.title}>Hello,</h2>
        <p>I am Jashoshul Wathon, an artist/designer based in Semarang focused on UX/UI design and illustration</p>
        <Link className={style.btn} to="/work">View work</Link>
      </div>
      <br />
      <br />
      <br />
      <WorkCard 
        link='/work'
        title='CD'
        body= '2020'
        img= {cover}
      />
      <WorkCard 
        link='/work'
        title='CD'
        body= '2020'
        img= {cover}
      />
      <br />
      <br />
      <br />
    </Layout>
  )
}

export default Index

