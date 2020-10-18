import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import QuickInfo from "../components/HomePageComponent/QuickInfo"
// import { Helmet } from 'react-helmet'

// import { StaticQuery, graphql } from "gatsby"
import { FaChevronDown } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <HomeHeader>
      <SEO
        title="Home"
        keywords={[
          `compost`,
          `mulch`,
          `soil amendments`,
          `soil`,
          `healthy soil`,
          `carbon farming`,
          `yard waste`,
          `organics`,
          `yard debris`,
          `manure`,
          `organic`,
          `farming`,
          `gardening`,
          `landscaping`,
          `landscape supply`,
          `agricultural supply`,
          `agriculture`,
          `vineyards`,
          `grape growers`,
          `landscapers`,
          `farmers`,
          `sustainable`,
          `regenerative`,
          `CDFA`,
          `certified organic`,
          `recycling`,
          `Marin`,
          `Sonoma`,
          `Bay Area`,
          `erosion`,
          `erosion control`,
          `weed control`,
          `fertilizer`,
          `water conservation`,
          `MWELO`,
          `CCOF`,
          `OMRI`,
          `vineyard mulch`,
          `mallard plus`,
          `nicasio blend`,
          `hi-test compost`,
        ]}
      />

      <Banner
        title="West Marin Compost"
        subtitle="5575 Nicasio Valley Rd, Nicasio, CA 94946"
      >
        <Link to="/products" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>Products</BannerButton>
        </Link>
      </Banner>
      <FaChevronDown
        style={{
          fontSize: "3rem",
          color: "#fff",
          position: "absolute",
          bottom: 0,
        }}
      />
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
