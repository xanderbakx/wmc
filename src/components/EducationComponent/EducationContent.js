import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default class EducationContent extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            climate: file(relativePath: { eq: "climate-friendly.png" }) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            rescape: file(relativePath: { eq: "rescape.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <Section>
            <Title
              message=""
              title="West Marin Compost hopes that you will visit our website regularly to find out about events, workshops, articles, and videos"
            />
            <EducationContentWrapper>
              <p className="text">
                Will Bakx will be presenting the healthy soils and carbon
                sequestration sections of the next online{" "}
                <a
                  href="https://rescape.memberclicks.net/index.php?option=com_jevents&task=icalrepeat.detail&evid=239&Itemid=149&year=2020&month=09&day=17&title=rescape-design-qualification-training-online&uid=70a8b82b656fde91e4b7f3eb34234fb9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Rescape Design Qualification Training.</b>
                </a>
              </p>

              <Img
                id="gardener"
                style={{
                  margin: "1rem auto 1rem auto",
                  border: "2px solid lightgrey",
                  width: "75%",
                }}
                fluid={data.rescape.childImageSharp.fluid}
              />

              <h2 style={{ paddingTop: "2rem" }}>Carbon Farming</h2>
              <p className="text">
                Increasing organic matter in our soils helps building healthy
                soils:
              </p>
              <ul style={{ fontWeight: 600, padding: "1rem 0" }}>
                <li>Conserve water</li>
                <li>Reduce erosion</li>
                <li>Improve soil structure</li>
                <li>Diverse, abundant microbial population</li>
                <li>Optimized nutrient management</li>
              </ul>

              <p className="text">
                Increased soil organic matter also takes CO2 from the atmosphere
                and sequesters it in the soil, thereby helping to reverse
                climate change. Wise use of compost and mulches helps to carbon
                farm.
              </p>
              <p className="text">
                Carbon farming found its roots right here in Marin County
                through the{" "}
                <a
                  href="https://www.marincarbonproject.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marin Carbon Project
                </a>
              </p>
              <div
                style={{
                  margin: "1rem 0",
                  position: "relative",
                  overflow: "hidden",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  title="Soil Story"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/nvAoZ14cP7Q"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h2>Getting started with carbon gardening</h2>
              <p className="text">
                We can also do our part of carbon sequestration in the backyard.
                The same principals apply.
                <a
                  href="http://www.igrowsonoma.org/wp-content/uploads/2015/09/climate-friendly-gardener-ucs.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </a>
                is an educational article that will get you going.
              </p>
              <a
                href="http://www.igrowsonoma.org/wp-content/uploads/2015/09/climate-friendly-gardener-ucs.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  id="gardener"
                  style={{
                    margin: "1rem auto 1rem auto",
                    border: "2px solid lightgrey",
                    width: "75%",
                  }}
                  fluid={data.climate.childImageSharp.fluid}
                />
              </a>
            </EducationContentWrapper>
          </Section>
        )}
      />
    )
  }
}

const EducationContentWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 992px;
  ul {
    list-style-type: none;
  }
  li {
    padding: 0.2rem 0;
  }
  h2 {
    padding: 2rem 0 0.5rem 0;
    color: ${styles.colors.mainBrown};
  }
  p {
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: ${styles.colors.mainBrown};
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
