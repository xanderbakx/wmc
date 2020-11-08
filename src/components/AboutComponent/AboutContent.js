import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
// import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

export default class AboutContent extends Component {
  render() {
    return (
      <Section>
        <Title
          message=""
          title="West Marin Compost was founded based on a community-driven desire to benefit the environment, the agricultural community, the county and the local community in numerous ways"
        />
        <AboutContentWrapper>
          <h2>Keeping it local - closing the loop:</h2>
          <p className="text">
            Green and equestrian discard materials used to be trucked out of
            West Marin to facilities in East Marin or beyond. Diversion of West
            Marin {/* organic */}discard materials away from landfill disposal
            to reuse within West Marin will benefit all Marin residents.
            Composting in Marin will reduce greenhouse gasses in the landfill
            while creating high quality soil amendments locally.
          </p>

          <h2>
            Creating a solution for agriculture to meet water quality standards:
          </h2>
          <p className="text">
            Hundreds of tons of nutrients are purposefully imported into the
            region each year in the form of inorganic and organic feed and
            fertilizers. Some of these have the potential to contribute to the
            concentration of nutrients in West Marin surface waters. A local
            biological soil amendment will reduce the need to import nutrients
            from beyond West Marin, and thus reduce the potential for excess
            nutrients to end up in surface waters. Making and using compost
            locally provides agricultural operations with a tool to help them
            meet recently established TMDL water quality standards. Compost is
            vital to organic farming, and the number of organic acres is
            increasing in Marin County.
          </p>

          <h2>Providing a biologic soil amendment for local farming:</h2>
          <p className="text">
            Because finished compost is a dry material it is much less costly to
            apply to land than wet manure. Finished compost is odorless and much
            less mobile under rainfall conditions than manure. Properly
            composted material does not contain viable weed seeds, which liquid
            manure often does, so spreading compost does not spread thistles or
            other weeds.
          </p>

          <h2>Local ownership:</h2>
          <p className="text">
            West Marin Compost is owned by Kevin and Nancy Lunny, well respected
            West Marin residents. They firmly believe in good business practices
            that will benefit the community they live in.
          </p>
        </AboutContentWrapper>
      </Section>
    )
  }
}

const AboutContentWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 992px;
  h2 {
    padding: 2rem 0 0.5rem 0;
    color: ${styles.colors.mainBrown};
  }
  p {
    padding-bottom: 1rem;
  }
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
