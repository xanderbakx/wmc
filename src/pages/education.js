import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import educationImg from "../images/night-compost.png"
import EducationContent from "../components/EducationComponent/EducationContent"

const EducationPage = () => (
  <Layout>
    <SEO title="Education" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={educationImg}>
      <Banner title="Education" subtitle=""></Banner>
    </PageHeader>
    <EducationContent />
  </Layout>
)

export default EducationPage
