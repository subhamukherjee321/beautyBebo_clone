import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (<>
    <footer><div className="footer-main-aj">
      <div className="footer-top">
        <div className="divide">
          <div className="one">
            <div className="footer-block-title">
              <h3>CONTACT INFO</h3>
            </div>
            <div className="list-contact-aj">
              <ul className="links-contact">
                <li className="phone">(+91) 97990 30777</li>
                <li className="mail">
                  <a href="mailto:support@beautybebo.com">support@beautybebo.com</a><br /><a
                    href="mailto:sales@beautybebo.com"
                    >sales@beautybebo.com
                  </a>
                </li>
                <li className="time">Open time: 10:00AM - 7:00PM</li>
              </ul>
            </div>
            <div className="socials-wrap">
              <ul className="links-contact">
                <li className="li-social facebook-social">
                  <a
                    title="Facebook"
                    href="https://www.facebook.com/BeautyBebo-339715696750230/"
                    target="_blank"
                    ><span className="fa fa-facebook icon-social"></span
                  ></a>
                </li>
                <li className="li-social pinterest-social">
                  <a
                    title="Instagram"
                    href="https://www.instagram.com/beautybeboofficial/"
                    target="_blank"
                    ><span className="fa fa-instagram icon-social"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="two">
            <div className="footer-block-title">
              <h3>QUICK LINKS</h3>
            </div>
            <div className="footer-block-content">
              <ul className="links">
                <li><a href="/about-us">About us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/return-policy">Return and Refund Policy</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divide">
          <div className="three">
            <div className="footer-block-title">
              <h3>CUSTOMER</h3>
            </div>
            <div className="footer-block-content">
              <ul className="links">
                <li><a href="/customer/account/">My Account</a></li>
                <li><a href="/track-order/">Track your Order</a></li>
                <li><a href="/order-return">Order Returns</a></li>
                <li><a href="/wishlist/">Wishlist</a></li>
                <li><a href="/blog/">News &amp; Events</a></li>
                <li><a href="/faqs">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="four">
            <div className="footer-block-title">
              <h3>CATEGORIES</h3>
            </div>
            <div className="footer-block-content categories">
              <ul className="links">
                <li>
                  <a href="https://www.beautybebo.com/makeup.html?___store=default"
                    ><span>Makeup</span></a
                  >
                </li>
                <li>
                  <a href="https://www.beautybebo.com/skin.html?___store=default"
                    ><span>Skin</span></a
                  >
                </li>
                <li>
                  <a href="https://www.beautybebo.com/hair.html?___store=default"
                    ><span>Hair</span></a
                  >
                </li>
                <li>
                  <a href="https://www.beautybebo.com/personal-care.html?___store=default"
                    ><span>Personal Care</span></a
                  >
                </li>
                <li>
                  <a href="https://www.beautybebo.com/mom-baby-care.html?___store=default"
                    ><span>Mom &amp; Baby Care</span></a
                  >
                </li>
                <li>
                  <a href="https://www.beautybebo.com/fragrance.html?___store=default"
                    ><span>Fragrance</span></a
                  >
                </li>
                <li>
                  <a href="https://www.beautybebo.com/ayurveda.html?___store=default"
                    ><span>Ayurveda</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-1-aj">
        <div className="footer-payment_img">
          <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="" />
        </div>
        <div className="footer-right-signup">
          <div><span>Signup For Newsletter</span></div>
          <div className="signup-buttons-place">
            <div>
              <input type="text" className="enter-signup-text" placeholder="Signup For Newsletter" />
            </div>

            <div><input type="button" value="Subscribe" className="enter-signup-button" /></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-2-aj">© 2020 All Rights Reserved.</div>
    </div>
  </footer>
  </>
  )
}

export default Footer;