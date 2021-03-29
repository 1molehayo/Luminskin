import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

export const ErrorModal = ({
  buttonText,
  closeModal,
  handleError,
  message,
  showModal,
  title
}) => {
  return (
    <Modal show={showModal} onHide={closeModal} className="error-modal">
      <Modal.Body>
        <div className="error-icon" />

        <h3 className="error-title">{title}</h3>
        <p className="paragraph mb-4">{message}</p>

        <Button onClick={handleError}>{buttonText}</Button>
      </Modal.Body>
    </Modal>
  );
};

ErrorModal.propTypes = {
  buttonText: PropTypes.string,
  closeModal: PropTypes.func,
  handleError: PropTypes.func,
  message: PropTypes.string,
  showModal: PropTypes.bool,
  title: PropTypes.string
};
