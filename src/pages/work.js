import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Seo from '../components/seo'
import WorkCard from '../components/WorkCard'
// import BlogCard from '../components/BlogCard'
// import SearchBar from '../components/SearchBar'

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
          <br />
          <br />
          <br />
          {this.state.posts.map(({ node }) => (
            <WorkCard key={node.id}
              title={node.frontmatter.title}
              link={node.frontmatter.path}
              // tags={node.frontmatter.tags.split(' ')}
              img={node.frontmatter.image}
            />
          ))}
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
