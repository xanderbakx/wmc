import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import carbon1 from "../../documents/CarbonGardeningPart1.pdf"
import carbon2 from "../../documents/CarbonGardeningPart2.pdf"
import carbon3 from "../../documents/CarbonGardeningPart3.pdf"
import lawnConversion from "../../documents/LawnConversion.pdf"

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
              <div id="carbon-gardening"></div>
              <h2>Getting started with carbon gardening</h2>
              <p className="text">
                We can also do our part of carbon sequestration in the backyard.
                The same principals apply as in carbon farming. Here are some
                educational articles that will get you going:
              </p>
              {/* Articles */}
              <ul>
                <li>
                  <a href={carbon1} target="_blank" rel="noopener noreferrer">
                    Carbon Gardening Part 1
                  </a>
                  : Introduction to sequestering carbon
                </li>
                <li>
                  <a href={carbon2} target="_blank" rel="noopener noreferrer">
                    Carbon Gardening Part 2
                  </a>
                  : Sequestering carbon with mulch
                </li>
                <li>
                  <a href={carbon3} target="_blank" rel="noopener noreferrer">
                    Carbon Gardening Part 3
                  </a>
                  : Sequestering carbon with compost
                </li>
              </ul>
              <p className="text">
                Compost and mulches will build organic matter in the soil. As we
                increase organic matter in the soil many benefits are the
                result. The most timely are that increased soil organic matter
                results in great water savings and help mitigate climate change.
                Mitigating climate change means that we can look at a future
                where extreme fires, droughts, floods, etc. are not the norm
                anymore. Meanwhile, enjoy slow release nutrients from compost, a
                diverse, large population of microorganisms that aids to reduce
                or eliminate pesticides, weed suppression that can reduce or
                eliminate the use of herbicides. Mulches can keep the soil
                warmer in winter and cooler in summer.
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

              <h2 id="lawnConversion">
                Lawn Conversion/Mulching: A tool to live with drought
              </h2>
              <p className="text">
                Lawns are big water guzzlers. Converting lawns can save a lot of
                water. California can never act as if there is no drought.
                Everyone has to chip in to cope with our sustainable water
                management. If you have a lawn, lawn conversion is a green way
                to conserve water, soil and labor. When you remove your lawn you
                also remove approximately 500 years of fertile soil. The lawn
                that is pulled out cannot be composted, since it has too much
                soil in it. In the landfill it contributes to greenhouse gases.
                So, why not just leave it in and turn it into the foundation for
                a drought tolerant native landscape or vegetable garden. Simply
                cover the lawn with compost, cardboard or newspaper and mulch,
                keep moist, and nature will do the rest for you. For more
                information on how to do this take a look at this Lawn
                Conversion{" "}
                <a
                  href={lawnConversion}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  document
                </a>
                .{" "}
                <b>
                  Note: given that we are in a drought, it would be prudent to
                  place the irrigation structure and compost/cardboard/mulch
                  layer now, but hold off on planting until the next rainy
                  season has started.
                </b>
              </p>
              <p className="text">
                Marin Water is offering customers a cash rebate in return for
                removing grass in their landscapes and preparing it for climate
                appropriate, low water use plants and efficient irrigation.
                Until October 31, 2021, Marin Water is offering $3 per square
                foot of existing grass removed using a{" "}
                <a
                  href="http://lawntogarden.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sheet mulch
                </a>{" "}
                approach, and for capping the irrigation system in the project
                area. <b>Please note:</b> applications for this program will be
                available on June 1.{" "}
                <u>Preapproval is required to participate in this program.</u>{" "}
                Projects that have been started, or projects that have already
                been completed prior to receiving approval to participate, are
                not eligible. Contact our water efficiency team at (415)
                945-1527 for additional information.
              </p>
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
    color: ${styles.colors.mainGreen};
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
