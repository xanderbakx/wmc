import React, { Component } from "react"
import { Section, Title } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"

export default class FaqContent extends Component {
  render() {
    return (
      <Section>
        <Title message="" title="" />
        <FaqContentWrapper>
          <h2>How is compost made?</h2>
          <p className="text">
            Dairy manure separator solids are combined with green and equestrian
            materials, formed into windrows on the composting pad and adjusted
            for moisture as needed. Windrows are managed in accordance with
            CalRecycle (and Nicasio Blend under the USDA National Organic
            Program (NOP)) guidelines to reduce pathogens and weed viability to
            negligible levels. Microbes, naturally present in the compost pile,
            cause the pile to heat up. Temperatures are taken daily to assure
            that sufficient high temperature levels have been met. A mechanical
            screen is used to separate coarse from fine material at the end of
            the process once the compost has reached maturity.
          </p>

          <h2>What about noxious or diseased weeds?</h2>
          <p className="text">
            WMC does accept almost all “weeds.” Most weeds and weed seeds are
            destroyed by the high temperatures of the thermophilic composting
            process. One notable exception is the seeds of common field bindweed
            (Convolvulus arvensis), which have been shown to survive
            temperatures of up to 180 F. Consequently, we do not accept this
            material at the drop off site. Some plant species do not like to be
            ground like bamboo and palm. While the irritant of poison oak breaks
            down in the composting process, until then it can cause our
            employees to be affected by poison oak. Most other plant material is
            accepted. Clopyralid, a broadleaf herbicide, does not break down in
            a timely manner. Green material and manures that contain clopyralid
            are not allowed.
          </p>

          <h2>Why is compost better than liquid manures?</h2>
          <p className="text">
            Through the composting process nutrients are immobilized by the
            microorganisms. As a result, the nutrients are being conserved, not
            washed away by rain or irrigation. As the microbes die, new
            nutrients become available, hence a slow release of nutrients is
            provided throughout the growing season. Because finished compost is
            a dry material, typically less than 50% moisture at maturity, it is
            less costly to spread than wet manure (typically 75-95% water). In
            addition, finished compost is odorless. Compost is often used as an
            erosion control material to help prevent soil movement on disturbed
            sites. Properly composted material does not contain viable weed
            seeds, which liquid manure often does, so spreading compost does not
            spread thistles or other weeds.
          </p>
        </FaqContentWrapper>
      </Section>
    )
  }
}

const FaqContentWrapper = styled.div`
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
