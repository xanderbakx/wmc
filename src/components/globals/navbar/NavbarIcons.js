import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaFacebook } from "react-icons/fa"

export default class NavbarIcons extends Component {
  render() {
    return (
      <IconWrapper>
        <a
          href="https://www.facebook.com/westmarincompost"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook-icon" />
        </a>
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  .facebook-icon {
    color: #3b579d;
  }
  display: none;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin-left: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`
