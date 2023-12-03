import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Email from "../components/Email"
import About from "../components/About"

const AboutPage = () => (
  <Layout>
    <Seo title='About'/>
    <About/>
    <Email/>
  </Layout>
)

export default AboutPage
