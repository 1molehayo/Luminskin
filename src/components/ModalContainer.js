import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Modal } from 'react-bootstrap';

export const ModalContainer = ({
  children,
  closeModal,
  isOpen,
  className,
  ltr,
  backdrop
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      backdrop={backdrop}
      className={classnames('modal-wrapper', className, {
        'modal-wrapper--left': ltr,
        'modal-wrapper--right': !ltr
      })}
    >
      <div className="modal-inner">{children}</div>
    </Modal>
  );
};

ModalContainer.propTypes = {
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  ltr: PropTypes.bool
};

ModalContainer.defaultProps = {
  backdrop: true,
  ltr: false
};
