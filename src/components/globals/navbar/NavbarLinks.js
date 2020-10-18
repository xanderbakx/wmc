import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "Home",
      },
      {
        id: 1,
        path: "/about",
        name: "About",
      },
      {
        id: 2,
        path: "/products",
        name: "Products",
      },
      {
        id: 3,
        path: "/drop-off",
        name: "Drop Off",
      },
      {
        id: 4,
        path: "/education",
        name: "Education",
      },
      {
        id: 5,
        path: "/faq",
        name: "FAQ",
      },
      {
        id: 6,
        path: "/contact",
        name: "Contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    /* text-transform: capitalize; */
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainGreen};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "266px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin-left: auto;
    margin-right: 0;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`
