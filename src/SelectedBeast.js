import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    const beast = this.props.beast;
    return (
      <Modal show={this.props.display} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{beast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={beast.image_url} alt={beast.title}></img>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;