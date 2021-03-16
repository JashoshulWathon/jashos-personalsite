import React from 'react'
import styled from 'styled-components'

import { breakPoints } from '../components/MediaType'
import Layout from '../components/Layout'
import Seo from '../components/seo'

const AboutMe = styled.section`
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 1px 22px;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 1px;

  @media ${breakPoints.phone} {
     font-size: 17px;
  }
`
export default () => {
  return (
    <Layout>
      <Seo title='About' />
      <AboutMe>
        <p>
          My name is I am Jashoshul Wathon, an artist/designer based in Semarang focused on UX/UI design and illustration.
          <br />
          <br />
          I am now actively looking for some fun projects to work on.
          I like challenges of all sorts so if you are looking for someone to work with, don't hesitate to drop me a message with any suggestions. Looking forward to hearing from you!🙂
        </p>
      </AboutMe>
    </Layout>
  )
}
