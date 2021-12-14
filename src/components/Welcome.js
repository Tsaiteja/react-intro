import React from "react";
import {ListGroup} from "react-bootstrap";

class Welcome extends React.Component {

  render() {
    const {message, incrementCounter} = this.props
    return (
      <div>
        <p> {message} </p>
        <button onClick={incrementCounter}>Submit</button>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

export default Welcome