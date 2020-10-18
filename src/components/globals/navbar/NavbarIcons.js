import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaFacebook } from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/westmarincompost",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
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
    display: flex;
    width: 4rem;
    justify-content: space-around;
  }
`
