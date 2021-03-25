import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import style from './global.module.scss'
// import cover from '../../static/assets/cover.jpg'

// Components
import Layout from '../components/Layout'
import Seo from '../components/seo'
import BlogCard from '../components/BlogCard'
// import SearchBar from '../components/SearchBar'

const Search = styled.div`
  position: relative;
  top: 20px;
`
const Container = styled.div`
  margin: 40px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
`

export default class Blog extends Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    this.setState({
      posts: this.props.data.allMarkdownRemark.edges,
    })
  }

  searchPosts = (e) => {
    let currentItems = []
    let searchingItem = []
    if (e.target.value !== '') {
      currentItems = this.props.data.allMarkdownRemark.edges
      searchingItem = currentItems.filter(({ node }) => {
        const Title = node.frontmatter.title.toLowerCase()
        const Tags = node.frontmatter.tags.toLowerCase()
        const filter = e.target.value.toLowerCase()
        let bool = false
        if (Title.includes(filter) || Tags.includes(filter)) {
          bool = true
        }
        return bool
      })
    } else {
      searchingItem = this.props.data.allMarkdownRemark.edges
    }
    this.setState({
      posts: searchingItem,
    })
  }

  render() {
    return (
      <Layout>
        <Seo title='Work' />
        {/* <Search> 
          <SearchBar searching={this.searchPosts} /> 
        </Search> */}
        <Container>
          <div className={style.content}>
            <div>
              <h2 className={style.title}>Hello,</h2>
              <p>I am Jashoshul Wathon, a creative designer focused on UX/UI Design based in Semarang. I also have experienced building web pages as a frontend dev. <br /> <br />Casually create illustrations and video animation and always passionate about learning new stuff.</p>
              {/* <Link className={style.btn} to="/blog">View work</Link> */}
            </div>
            {/* <img className={style.img} src={cover}></img> */}
          </div>
        </Container>
        <br /><br />
        <h3 className={style.subtitle}>My work</h3>
        <Container>
          {this.state.posts.map(({ node }) => (
            <section key={node.id}>
              <BlogCard
                title={node.frontmatter.title}
                path={node.frontmatter.path}
                tags={node.frontmatter.tags.split(' ')}
                img={node.frontmatter.image}
              />
            </section>
          ))}
        </Container>
        <br /><br /><br /><br />
      </Layout>
    )
  }
}

export const blogQ = graphql`
  query {
    allMarkdownRemark(
     sort: { order: DESC, fields: [frontmatter___date]},
     filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
   ){
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
            tags
          }
        }
      }
    }
 }
`
