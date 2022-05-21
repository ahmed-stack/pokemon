import React from "react";
import PropTypes from "prop-types";

// Style Imports
import { Modal } from "react-bootstrap";

function CustomModal({ show, size, fullscreen, hideHandler, children }) {
  return (
    <Modal
      show={show}
      size={size}
      fullscreen={fullscreen}
      onHide={hideHandler}
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

CustomModal.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  fullscreen: PropTypes.bool,
  hideHandler: PropTypes.func,
  children: PropTypes.element,
};

CustomModal.defaultProps = {
  show: false,
  size: "lg",
  fullscreen: false,
};

export default CustomModal;
