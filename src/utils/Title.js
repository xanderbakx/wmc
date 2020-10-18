import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline"></div>
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: "our message",
  title: "our title",
}

const TitleWrapper = styled.div`
  text-align: center;
  max-width: 992px;
  margin: 2rem auto;
  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 1rem;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
    @media (min-width: 992px) {
      font-size: 1.5rem;
    }
  }
  .underline {
    width: 12rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`
