import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Services = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <h2 className="section__title section__title--services">What I do</h2>

      <OwlCarousel
        className="owl-theme"
        autoplay
        loop
        responsiveClass
        margin={8}
        responsive={options.responsive}
      >
        <div className="item">
          <div className="service">
            <h3>Design + Development</h3>
            <p>
              Clean,responsive modern websites - performance optimized, search
              engines optimized, and converting users to customers.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="service">
            <h3>E-Commerce</h3>
            <p>
              Integration of eCommerce platforms, payment gateways, shipping
              details, custom product templates, and more.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="service">
            <h3>Content Management</h3>
            <p>
              Custom WordPress Website. Easily update content without knowing
              how to code.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="service">
            <h3>Analytics</h3>
            <p>
              Get insights about who is browsing your site, when and where, so
              that you can make smarter business decisions.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="service">
            <h3>ChatBots</h3>
            <p>
              Do you need an automated chatbot for your business. I can get it
              for you.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="service">
            <h3>Mobile Friendly</h3>
            <p>
              Mobile first websites is priority. With a responsive design your
              website is accessible to all users, regardless of their device.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="service">
            <h3>Website Audit</h3>
            <p>
              Looking to improve your page performance, SEO, or user experience
              of your website? Request a free site audit.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="service">
            <h3>Mobile Applications</h3>
            <p>
              Get a mobile application for your business. Andriod, iOS, and
              others
            </p>
          </div>
        </div>

        <div className="item">
          <div className="service">
            <h3>Online Branding and Consulting</h3>
            <p>
              New to the online world and do not know where to start? Get in
              touch. I can set you up and running in no time.
            </p>
          </div>
        </div>
      </OwlCarousel>

      <a href="#work" className="btnn mt-6">
        My Work
      </a>
    </div>
  );
};

export default Services;
