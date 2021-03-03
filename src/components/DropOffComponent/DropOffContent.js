import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"

import { styles } from "../../utils"

export default class DropOffContent extends Component {
  render() {
    return (
      <Section>
        <Title message="" title="Got Yard Debris?" />
        <DropOffContentWrapper>
          {/* <div id="greenWaste">
            <h2>Free Drop Off Program Has Ended</h2>
            <p className="text">
              Due to the overwhelming response to the Free Green Waste Days for
              defensible space clearing at West Marin Compost – the facility is
              at capacity and cannot accept anymore material. We are sorry to
              have to CANCEL the last day. Please pass the word.
            </p>
            <h1 style={{ color: '#69bd45' }}>Free Green Waste Days</h1>
            <h3>June 6th &amp; 20th | July 11th &amp; 25th</h3>
            <h5><i>Marin Residents Only</i></h5>
            <h5><i>Residential Yard Debris Only</i></h5>
            <h5>Hours: 9am - 4pm</h5>
            <a href={greenWasteDay} target="_blank" rel="noopener noreferrer"><img src={greenWasteImg} alt="Green Waste" width="30%"></img></a>
          </div>

          <hr /> */}

          <h2>The green materials drop off site is open to the public:</h2>
          <p className="text" style={{ fontWeight: 600 }}>
            Monday - Saturday from 7:00am to 3:00pm
          </p>
          <p className="text" style={{ fontWeight: 600 }}>
            5575 Nicasio Valley Rd, Nicasio, CA 94946
          </p>
          <p className="text" style={{ fontWeight: 600 }}>
            (415) 662-9849
          </p>

          <h2>Drop off fee</h2>

          <p className="text">
            The drop off fee provides essential long-term support for the
            project and is competitive with alternative green materials disposal
            options for West Marin residents, while reducing the time and fuel
            needed for trucking to East Marin disposal sites, or beyond.
          </p>
          <p className="text">
            <b>Please note: </b>It is illegal to put toxins into the green can
            or dispose of them in any but an approved toxic waste facility. Each
            incoming load is inspected; contaminated loads are not accepted. If
            contaminants are found following off-loading, the driver will be
            required to immediately reload and remove the material from the
            site.
          </p>
          <p className="text">
            Only clean green material (yard debris) will be accepted at the drop
            off site.
          </p>
          <p className="text">
            <b>Tipping fee: </b>A tipping fee is charged for all materials
            delivered to the drop off site. Each load will be measured to assess
            the volume.
          </p>

          <div className="grid-container">
            <div className="grid-item">Green material</div>
            <div className="grid-item">$30/cubic yard</div>
            <div className="grid-item">Tree trunks</div>
            <div className="grid-item">$45/ton</div>
            <div className="grid-item">Tree stumps up to 1' diameter</div>
            <div className="grid-item">$110 each</div>
            <div className="grid-item">Tree stumps up to 2' diameter</div>
            <div className="grid-item">$220 each</div>
            <div className="grid-item">Tree stumps up to 3' diameter</div>
            <div className="grid-item">$330 each</div>
            <div className="grid-item">Dimensional lumber/wood scraps</div>
            <div className="grid-item">Will no longer be accepted</div>
          </div>

          <p className="text">
            <b>West Marin equestrian facilities: </b>West Marin Compost provides
            manure hauling services. We will place an empty dumpster for used
            bedding and manure. Full dumpsters are hauled and replaced by an
            empty one as needed. Please call us at (415) 662-9849 to set up your
            service and discuss fees.
          </p>
          <p className="text">
            <b>Other manures: </b>Please contact us for services on other manure
            management.
          </p>
        </DropOffContentWrapper>
      </Section>
    )
  }
}

const DropOffContentWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 992px;
  h2 {
    padding: 2rem 0 0.5rem 0;
    color: ${styles.colors.mainBrown};
  }
  p {
    padding-bottom: 0.5rem;
  }
  li {
    padding: 0.2rem 0;
  }
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  .grid-container {
    padding: 1rem 0;
    font-weight: 600;
  }
  .grid-item {
    padding: 0.2rem 0;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". ." ". ." ". ." ". ." ". ." ". .";
    grid-column-gap: 1rem;
  }
  #greenWaste {
    text-align: center;
  }
`
