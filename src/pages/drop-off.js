import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import dropOffImg from "../images/compost-piles.jpg"
import DropOffContent from "../components/DropOffComponent/DropOffContent"

const DropOffPage = () => (
  <Layout>
    <SEO title="Drop Off" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={dropOffImg}>
      <Banner title="Drop Off" subtitle=""></Banner>
    </PageHeader>
    <DropOffContent />
  </Layout>
)

export default DropOffPage
