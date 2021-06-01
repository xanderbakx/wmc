import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import {
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaEnvelope className="icon envelope-icon" />,
        path: `mailto:nancy@westmarincompost.com`,
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com/westmarincompost`,
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">West Marin Compost</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div>
          <p className="text">
            <FaClock style={{ marginRight: "1rem" }} />
            7:00 am - 3:00 pm
          </p>
          <p className="text">
            <FaPhone style={{ marginRight: "1rem" }} />
            (415) 662-9849
          </p>
          <p style={{ marginBottom: "3rem" }} className="text">
            <FaMapMarkerAlt style={{ marginRight: "1rem" }} />
            5575 Nicasio Valley Rd. Nicasio, CA 94946
          </p>
        </div>
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()} West Marin Compost
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 5rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainRed};
    }
  }
  .copyright {
    color: ${styles.colors.mainGrey};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0 0 0;
  }
  .text {
    color: ${styles.colors.mainWhite};
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 20rem;
    color: ${styles.colors.mainRed};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainRed}` })};
  }
`
