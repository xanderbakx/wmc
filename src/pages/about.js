import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/fog-compost.jpg"
import AboutContent from "../components/AboutComponent/AboutContent"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="About" subtitle=""></Banner>
    </PageHeader>
    <AboutContent />
  </Layout>
)

export default AboutPage
