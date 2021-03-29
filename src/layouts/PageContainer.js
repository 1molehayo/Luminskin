import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Header } from './Header';
import { Footer } from './Footer';

export const PageLayout = ({ children, pageClass }) => {
  return (
    <>
      <Header />

      <main className={classnames('page-body', pageClass)}>{children}</main>

      <Footer />
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  pageClass: PropTypes.string
};
