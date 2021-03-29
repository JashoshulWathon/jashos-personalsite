import React from "react"
import { graphql, Link } from "gatsby"


import style from "./blog.module.scss"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <Seo title={frontmatter.title} description={frontmatter.title} keywords={[frontmatter.seo]}/>
        <div className={style.blog_post}>
          {/* <Link to='/'>back to Work</Link> */}
          <div>
            <h1>{frontmatter.title}</h1>
            {/* <span>{frontmatter.date}</span> */}
          </div>
          {/* <img src={frontmatter.image}/> */}
          <div
            className={style.post_content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link className={style.back} to='/'>Back to Work</Link>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        image
        tags
        seo
      }
    }
  }
`
