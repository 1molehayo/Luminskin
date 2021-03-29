import React from 'react';
import { ReactComponent as Visa } from 'assets/img/svg/visa.svg';
import { ReactComponent as Amex } from 'assets/img/svg/amex.svg';
import { ReactComponent as Mastercard } from 'assets/img/svg/mastercard.svg';
import { ReactComponent as Slide } from 'assets/img/svg/slide.svg';

export const Footer = () => (
  <footer className="footer">
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-md-6 col-lg-5 pr-4">
          <div className="footer-about">
            <h2 className="heading color-white">Let’s stay in touch</h2>
            <p className="paragraph">
              We’ll give you a heads up on new Lumin products, deals, and
              events, plus tips &amp; tricks on how to keep your skin looking
              its damned finest.
            </p>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                id="email"
                className="form-control"
              ></input>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-7">
          <div className="row no-gutters">
            <div className="col-6 col-lg-3">
              <div className="footer-col">
                <p className="paragraph footer-title">Shop</p>

                <ul className="footer-list">
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Skin
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Hair
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Body
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="footer-col">
                <p className="paragraph footer-title">About</p>

                <ul className="footer-list">
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      How To
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Ingredients
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="footer-col">
                <p className="paragraph footer-title">More</p>

                <ul className="footer-list">
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Wholesale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Free Trial FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Hereos Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="paragraph footer-link">
                      Request Personal Data
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="footer-col">
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/lumin.skin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-instagram"></span>
                  </a>

                  <a
                    href="https://www.facebook.com/lumin.skincare/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-facebook"></span>
                  </a>

                  <a
                    href="https://www.twitter.com/lumin_skin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-twitter"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="paragraph footer-title">Need help</p>
        <p className="paragraph">
          Contact us through our &nbsp;
          <a className="footer-link mb-0 text-decorated" href="#">
            Support Concierge
          </a>
        </p>
        <p className="paragraph">
          Or email us at &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link mb-0 text-decorated"
            href="mailto:support@luminskin.com"
          >
            support@luminskin.com
          </a>
        </p>
      </div>

      <div className="footer-divider"></div>

      <div className="copyright">
        <div>&copy; {new Date().getFullYear()}, Lumin</div>
        <div className="copyright-row">
          <Visa width={39} height={39} className="copyright-icon" />
          <Amex width={39} height={39} className="copyright-icon" />
          <Mastercard width={39} height={39} className="copyright-icon" />
          <Slide width={39} height={39} className="copyright-icon" />
        </div>
      </div>

      <div className="other-footer-links">
        <a href="#" className="footer-link mb-0 text-decorated">
          Privacy Policy
        </a>
        <a href="#" className="footer-link mb-0 text-decorated">
          Return Policy
        </a>
        <a href="#" className="footer-link mb-0 text-decorated">
          Terms of Service
        </a>
      </div>

      <p className="paragraph mb-0 mt-3">
        3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010
      </p>
    </div>
  </footer>
);
