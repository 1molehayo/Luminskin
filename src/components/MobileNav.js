import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ModalContainer } from './ModalContainer';

export const MobileNav = ({ isOpen, closeModal }) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      closeModal={closeModal}
      className="mobile-nav"
      ltr
    >
      <div className="close-button" onClick={closeModal}>
        <span className="icon-right-arrow-angle"></span>
      </div>

      <div className="mobile-nav-top">
        <Link to="/" className="active">
          Shop
        </Link>
        <a href="">Help</a>
      </div>

      <div className="mobile-nav-body">
        <ul className="mobile-nav-list">
          <li>Skin</li>
          <li>Hair &amp; Body</li>
          <li>Sets</li>
          <li>Accessories</li>
          <li>Shop All</li>
        </ul>
      </div>
    </ModalContainer>
  );
};

MobileNav.propTypes = {
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool
};
