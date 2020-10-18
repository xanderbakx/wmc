import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Alert from "react-bootstrap/Alert"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"

export default class Notice extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (
      <div>
        <Alert variant="warning" style={{ textAlign: "center" }}>
          <b>Coronavirus Update:</b> We are open regular hours, but have taken
          several steps to mitigate the spread of the virus.
          <Alert.Link onClick={() => this.handleModal()}>
            {" "}
            Click here to learn more.
          </Alert.Link>
        </Alert>

        <Modal
          show={this.state.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>COVID-19 Precautions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Our focus is on eliminating contact points within our operations
                as well as with the public.
              </ListGroup.Item>
              <ListGroup.Item>
                We ask you to <b>pay with credit card</b> whenever possible.
              </ListGroup.Item>
              <ListGroup.Item>
                If you need to use cash, <b>bring exact change only</b>, we do
                not provide change. Any extra money will go to our employees as
                a tip, they deserve it.
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Checks and cash will be placed in a bag</b>, not handed to an
                employee.
              </ListGroup.Item>
              <ListGroup.Item>
                We have a washing station in front of the office.{" "}
                <b>Wash your hands</b> upon entry and when leaving.
              </ListGroup.Item>
              <ListGroup.Item>
                During this time we would like to provide a service to make
                compost and mulches available to grow your own food and to
                provide the resources to work in your yard. We all need that
                connection with the earth to stay grounded. Your cooperation to
                keep us all healthy is much appreciated.
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
