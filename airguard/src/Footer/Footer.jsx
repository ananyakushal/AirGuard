import React from 'react';
import "../Footer/Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer class="footer--light">
    <div class="footer-big">
      {/* <!-- start .container --> */}
      <div class="footer-container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div class="widget-about">
                <img decoding="async" src="images/bg-1.png" alt="" class="img-fluid"/>
                <p>There are many variations of users of YouTube available.</p>
                <ul class="contact-details">
                  <li>
                    <i class="fas fa-phone-alt"></i> Call Us:
                    <a href="#">011-23456789</a>
                  </li>
                  <li>
                    <i class="fas fa-envelope-open-text"></i>
                    <a href="#">support@scd.com</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Ends: .footer-widget -->
            <!-- Responsive Html Code created by : Shift Code Design --> */}
          </div>
          {/* <!-- end /.col-lg-4 --> */}
          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div class="footer-menu">
                <h4 class="footer-widget-title">Popular Category</h4>
                <ul>
                  <li>
                    <a href="#">WordPress Theme</a>
                  </li>
                  <li>
                    <a href="#">Bootstrap Template</a>
                  </li>
                  <li>
                    <a href="#">ReactJS Template</a>
                  </li>
                  <li>
                    <a href="#">Dashboard Theme</a>
                  </li>
                  <li>
                    <a href="#">HTML5 Template</a>
                  </li>
                </ul>
              </div>
              {/* <!-- end /.footer-menu --> */}
            </div>
            {/* <!-- Ends: .footer-widget --> */}
            {/* <!-- Responsive Html Code created by : Shift Code Design --> */}
          </div>
          {/* <!-- end /.col-lg-3 --> */}

          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div class="footer-menu">
                <h4 class="footer-widget-title">Our Company</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">How It Works</a>
                  </li>
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Plan & Pricing</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              {/* <!-- end /.footer-menu --> */}
            </div>
            {/* <!-- Ends: .footer-widget --> */}
          </div>
          {/* <!-- end /.col-lg-3 --> */}

          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <div class="footer-menu p-0">
                <h4 class="footer-widget-title">Help Support</h4>
                <ul>
                  <li>
                    <a href="#">Support Forum</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Support Policy</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              {/* <!-- end /.footer-menu --> */}
            </div>
            {/* <!-- Ends: .footer-widget --> */}
          </div>
          {/* <!-- Ends: .col-lg-3 --> */}

        </div>
        {/* <!-- end /.row --> */}
      </div>
      {/* <!-- end /.container --> */}
    </div>
    {/* <!-- end /.footer-big -->
    <!-- Responsive Html Code created by : Shift Code Design --> */}

    <div class="mini-footer">
      <div class="footer-container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright-text">
              <p>© 2024
                <a href="#">Shift Code Design</a>. All rights reserved. Created by
                <a href="#">SCD</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
