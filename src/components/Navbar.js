import React, { useContext, useEffect, useState } from 'react';
import useEventListener from 'services/useEventListener';
import { Nav, Navbar, NavItem, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from 'assets/img/lumin-logo.png';
import { LANGUAGES } from 'utility/constants';
import { SelectComponent } from 'components';
import { CartContext } from 'contexts/CartContext';
import { isArrayEmpty, getAggregate } from 'utility';
import { MobileNav } from './MobileNav';

export const Navigation = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isMobile, setisMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, toggleCart } = useContext(CartContext);

  const updateWindowDimensions = () => {
    setisMobile(window.innerWidth <= 990);
  };

  useEventListener('resize', updateWindowDimensions);

  useEffect(() => {
    updateWindowDimensions();
  }, []);

  return (
    <Navbar className="nav" color="light" sticky="top" bg="light" expand="lg">
      <div className="nav-wrapper">
        <div className="nav-wrapper--left">
          {!isMobile && (
            <NavbarBrand href="/">
              <img src={Logo} alt="Lumin" className="img-fluid" />
            </NavbarBrand>
          )}

          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setIsOpen((prevState) => !prevState)}
          />

          <MobileNav isOpen={isOpen} closeModal={() => setIsOpen(false)} />

          {!isMobile && (
            <Navbar.Collapse id="navbar-nav">
              <Nav>
                <NavItem>
                  <NavLink className="nav-link" exact to="/">
                    Shop
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/help">
                    Help
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          )}
        </div>

        <div className="nav-wrapper--right">
          <NavItem>
            <div className="nav-link">Account</div>
          </NavItem>

          <NavItem>
            <div className="nav-link cart-link" onClick={toggleCart}>
              <span className="icon-shopping-cart cart-link__icon"></span>
              <span className="cart-link__text">
                {!isArrayEmpty(cartItems)
                  ? getAggregate(cartItems, 'quantity')
                  : 0}
              </span>
            </div>
          </NavItem>

          <SelectComponent
            id="lang"
            className="nav-select"
            options={LANGUAGES}
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          />
        </div>
      </div>
    </Navbar>
  );
};
