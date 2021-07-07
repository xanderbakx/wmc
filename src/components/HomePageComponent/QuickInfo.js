import React, { Component } from "react"
import { Section, SectionButton } from "../../utils"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styled from "styled-components"
import { styles } from "../../utils"
export default class QuickInfo extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            cdfa: file(relativePath: { eq: "cdfa-organic.png" }) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            sale: file(relativePath: { eq: "CLCA_ad_8-20.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        `}
        render={data => (
          <Section>
            <QuickInfoWrapper>
              <h2>Defensible Space: Green Material Drop Off Dates 2021</h2>
              <p className="text">
                As the fire season is already upon us, West Marin Compost and
                Marin County Fire will be hosting two days where West Marin
                residents can drop off yard debris to facilitate a fire safe
                environment around their homes. The Marin County Fire department
                will be on site to facilitate the drop-off and may be available
                to answer questions, depending on time availability. Please use
                this event as an opportunity to walk around your home to assure
                you have created a Defensible Space. For more information on
                Defensible Space see this{" "}
                <a
                  href="https://www.marincounty.org/-/media/files/departments/fr/prevention/2017/dspacebrochure4pg.pdf?la=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  brochure
                </a>
                .
              </p>
              <h3>When & Where</h3>
              <h5>Dates: July 10th | August 14th</h5>
              <h5>Time: 7:00 am - 3:00 pm</h5>
              <h5>
                Where: West Marin Compost, 5575 Nicasio Valley Rd, Nicasio
              </h5>
              <hr />

              <h2>Organics Recycling: Good for the environment</h2>
              <p className="text">
                Marin residents can drop off yard debris at West Marin Compost
                to avoid landfilling. Organic matter in landfills creates
                methane, a potent greenhouse gas. As compost or mulch it is a
                valuable, much needed soil amendment that creates healthy soils:
              </p>
              <ul>
                <li>Improve soil structure</li>
                <li>Conserve water</li>
                <li>Reduce erosion</li>
                <li>Increase CEC (Cation Exchange Capacity)</li>
                <li>Optimized nutrient management</li>
                <li>Sequester carbon (carbon farming/gardening)</li>
              </ul>
              {/* "Know more" links */}
              <h2>In the know: Go to the links below to be informed</h2>
              <p>
                Find out more about{" "}
                <AnchorLink to="/education#carbon-gardening">
                  Carbon Gardening
                </AnchorLink>{" "}
                and how you can help mitigate climate change.
              </p>
              <p>
                Examine your home and garden for fire safety. Yard debris for
                clearing to meet defensible space requirements can be{" "}
                <AnchorLink to="/drop-off#defensibleSpace">
                  dropped off
                </AnchorLink>{" "}
                at West Marin Compost on July 10th and August 14th.
              </p>
              <p>
                Learn about fire safe uses of{" "}
                <AnchorLink to="/education#lawnConversion">mulches</AnchorLink>{" "}
                while improving fire safety around the home.
              </p>
              <hr />
              <Img
                style={{ maxWidth: 300, margin: "3rem auto 1rem auto" }}
                fluid={data.cdfa.childImageSharp.fluid}
              />
              <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
                Nicasio Blend is Organic. More to follow soon.
              </p>
              <hr />

              <h5>
                Reuse your vegetable scraps at home and recycle. Take a walk
                through the West Marin Compost site to learn more about organics
                recycling.
              </h5>
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
                  src="https://www.youtube.com/embed/XoNtu2SoAPQ"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <hr />

              <h2 style={{ marginTop: "1rem" }}>
                West Marin Compost is a public-private partnership between:
              </h2>
              <ul>
                <li>Lunny Grading and Paving, Inc.</li>
                <li>Lafranchi Dairy</li>
                <li>Marin County</li>
              </ul>

              <h2>Technical assistance from:</h2>
              <ul>
                <li>West Marin Compost Coalition</li>
              </ul>
              <h2>Administrative assistance from:</h2>
              <ul>
                <li>Marin Resource Conservation District (RCD)</li>
              </ul>
              <h2>Funding support from:</h2>
              <ul>
                <li>USDA Natural Resources Conservation</li>
                <li>Service-Conservation Innovation Grant</li>
                <li>Lunny Grading and Paving, Inc.</li>
                <li>The Rathmann Family Fund</li>
                <li>Redwood Empire</li>
              </ul>

              <Link to="/about" style={{ textDecoration: "none" }}>
                <SectionButton style={{ margin: "2rem auto" }}>
                  About
                </SectionButton>
              </Link>
              <div
                style={{ padding: "1rem 0 0 0" }}
                className="sharethis-inline-share-buttons"
              ></div>
            </QuickInfoWrapper>
          </Section>
        )}
      />
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 992px;
  text-align: center;
  h2 {
    padding: 1rem 0;
    color: ${styles.colors.mainBrown};
  }
  ul {
    margin: 0 auto;
    width: 80%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: space-between;
  }
  li {
    font-size: 1.1rem;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
  p {
    text-align: left;
  }
  a {
    color: ${styles.colors.mainGreen};
  }
  a:hover {
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
