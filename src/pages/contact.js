import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/machine.jpg"
import ContactContent from "../components/ContactComponent/ContactContent"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="Contact" subtitle=""></Banner>
    </PageHeader>
    <ContactContent />
  </Layout>
)

export default ContactPage
