import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import dropOffImg from "../images/compost-piles3.png"
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
