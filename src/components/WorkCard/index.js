import React from 'react'
import PropTypes from 'prop-types'
import style from './workCardStyle.module.scss'
import { Link } from 'gatsby'

const Index = props => {
  return (
    <Link to={props.link} className={style.card}>
      <img src={props.img} />
      <div className={style.content}>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
      </div>
    </Link>
  )
}

Index.propTypes = {
  title: PropTypes.string,
  body: PropTypes.any,
  img: PropTypes.string,
  link: PropTypes.string
}

export default Index
