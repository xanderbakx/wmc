import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
// import { StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

export default class ContactContent extends Component {
  render() {
    return (
      <Section>
        <h3 style={{ marginBottom: "2rem", textAlign: "center" }}>
          We will be closed Memorial Day and July 4
        </h3>

        <Title
          message=""
          title="West Marin Compost welcomes your inquiries and comments"
        />
        <ContactContentWrapper>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.8221090288475!2d-122.70785921510539!3d38.074523771706296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b8a52bb01cd1%3A0xbd730200e9ac9254!2sWest+Marin+Compost!5e0!3m2!1sen!2sus!4v1552948801542"
              width="600"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>

          <p className="text">
            Phone:{" "}
            <a className="link" href="tel:+1415-662-9849">
              (415) 662-9849
            </a>
          </p>
          <p className="text">
            Orders:{" "}
            <a className="link" href="mailto:nancy@westmarincompost.com">
              nancy@westmarincompost.com
            </a>
          </p>
          <p className="text">
            Manure hauling / Soil questions:{" "}
            <a className="link" href="mailto:kevin@westmarincompost.com">
              kevin@westmarincompost.com
            </a>
          </p>
        </ContactContentWrapper>
      </Section>
    )
  }
}

const ContactContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 992px;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  a.link {
    text-decoration: none;
    color: ${styles.colors.mainBrown};
  }
  .map {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    margin: 1rem auto;
    max-width: 80%;
  }
  .map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  p {
    text-align: center;
    font-weight: 600;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
