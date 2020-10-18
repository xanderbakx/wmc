import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import "../../css/fancy-accordion.css"

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemHeading,
//   AccordionItemPanel,
// } from "react-accessible-accordion"
// import "react-accessible-accordion/dist/fancy-example.css"

import { Accordion, Card, Button } from "react-bootstrap"

const CompostItem = ({ image, name, description, price }) => (
  <section className="compostItem">
    {/* <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h3>{name}</h3>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <div>
              <Img
                className="compostImg"
                style={{ maxWidth: "400px", marginBottom: "0.5rem" }}
                fluid={image.childImageSharp.fluid}
                alt={name}
              />
            </div>
            <div>
              <p>{description}</p>
              <p style={{ paddingTop: "1rem", fontWeight: "700" }}>{price}</p>
            </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}

    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" block eventKey="0">
            <h5>{name}</h5>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <GridWrapper>
              <Img
                className="compostImg"
                style={{ maxWidth: "400px", marginBottom: "0.5rem" }}
                fluid={image.childImageSharp.fluid}
                alt={name}
              />
              <div>
                <p>{description}</p>
                <p style={{ paddingTop: "1rem", fontWeight: "700" }}>{price}</p>
              </div>
            </GridWrapper>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </section>
)

export default CompostItem

const GridWrapper = styled.div`
  .compostImg {
    margin: 0 auto;
  }
  @media (min-width: 600px) {
    .compostImg {
      margin: 0 1rem 1rem 0;
      /* padding: 1rem; */
    }
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". .";
  }
`
