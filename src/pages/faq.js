import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import faqImg from "../images/compost-hand.jpg"
import FaqContent from "../components/FaqComponent/FaqContent"

const FaqPage = () => (
  <Layout>
    <SEO title="FAQ" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={faqImg}>
      <Banner title="FAQ" subtitle=""></Banner>
    </PageHeader>
    <FaqContent />
  </Layout>
)

export default FaqPage
