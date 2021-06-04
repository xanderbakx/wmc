import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import "../../css/fancy-accordion.css"

import { Accordion, Card, Button } from "react-bootstrap"

const CompostItem = ({ image, name, description, price }) => (
  <section className="compostItem">
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle
            style={{ color: "#4B8632" }}
            as={Button}
            variant="link"
            block
            eventKey="0"
          >
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
    }
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". .";
  }
`
