import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* <!-- Introduction --> */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Mary C.</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          front-end dev
        </p>
        <img
          src={process.env.PUBLIC_URL + "/images/brenda-main.jpg"}
          alt="Brenda Peters smiling"
          className="intro__img"
        />
      </section>

      {/* <!-- My services --> */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>

        <div className="services">
          <div id="slider">
            <article>
              <div className="slide">
                <div className="service">
                  <h3>Design + Development</h3>
                  <p>
                    Clean,responsive modern websites - performance optimized,
                    search engines optimized, and converting users to customers.
                  </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                  <h3>E-Commerce</h3>
                  <p>
                    Integration of eCommerce platforms, payment gateways,
                    shipping details, custom product templates, and more.
                  </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                  <h3>Content Management</h3>
                  <p>
                    Custom WordPress Website. Easily update content without
                    knowing how to code.
                  </p>
                </div>
                {/* <!-- / service --> */}
              </div>
              <div className="slide">
                <div className="service">
                  <h3>Analytics</h3>
                  <p>
                    Get insights about who is browsing your site, when and
                    where, so that you can make smarter business decisions.
                  </p>
                </div>
                {/* <!-- / service --> */}
                <div className="service">
                  <h3>ChatBots</h3>
                  <p>
                    Do you need an automated chatbot for your business. I can
                    get it for you.
                  </p>
                </div>
                {/* <!-- / service --> */}
                <div className="service">
                  <h3>Mobile Friendly</h3>
                  <p>
                    Mobile first websites is priority. With a responsive design
                    your website is accessible to all users, regardless of their
                    device.
                  </p>
                </div>
                {/* <!-- / service --> */}
              </div>
              <div className="slide">
                <div className="service">
                  <h3>Website Audit</h3>
                  <p>
                    Looking to improve your page performance, SEO, or user
                    experience of your website? Request a free site audit.
                  </p>
                </div>
                {/* <!-- / service --> */}
                <div className="service">
                  <h3>Mobile Applications</h3>
                  <p>
                    Get a mobile application for your business. Andriod, iOS,
                    and others
                  </p>
                </div>
                {/* <!-- / service --> */}
                <div className="service">
                  <h3>Online Branding and Consulting</h3>
                  <p>
                    New to the online world and do not know where to start? Get
                    in touch. I can set you up and running in no time.
                  </p>
                </div>
                {/* <!-- / service --> */}
              </div>
              <div className="slide">
                <div className="service">
                  <h3>Design + Development</h3>
                  <p>
                    Clean,responsive modern websites - performance optimized,
                    search engines optimized, and converting users to customers.
                  </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                  <h3>E-Commerce</h3>
                  <p>
                    Integration of eCommerce platforms, payment gateways,
                    shipping details, custom product templates, and more.
                  </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                  <h3>Content Management</h3>
                  <p>
                    Custom WordPress Website. Easily update content without
                    knowing how to code.
                  </p>
                </div>
                {/* <!-- / service --> */}
              </div>
            </article>
          </div>
        </div>
        {/* <!-- / services --> */}

        <a href="#work" className="btnn">
          My Work
        </a>
      </section>

      {/* <!-- About me --> */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          front-end dev / wordpress expert / freelancer
        </p>

        <div className="about-me__body">
          <p>
            Professionally connected with Information Technology for many years.
            Well organized, passionate, problem solver and pays attention to
            details.
          </p>
          <p>
            My main area of expertise is Front-end Development. I work with
            HTML, CSS, JavaScript, TypeScript, SPAs, Web Applications with React
            JS, animations and coding interactive and responsive layouts. <br />{" "}
            I also have full-stack development experience with open-source CMS
            like WordPress, Magneto and others.
          </p>
          <p>
            When not online, Brenda can be found hanging out with her friends,
            trying out a new recipe in the kitchen, making herself up, or
            writing on her blog, Beautietimes.
          </p>
          <a href="https://t.me/charmingbrenda" className="btnn">
            Hire Me
          </a>
        </div>

        <img
          src={process.env.PUBLIC_URL + "/images/brenda-about.jpg"}
          alt="Brenda"
          className="about-me__img"
        />
      </section>

      {/* <!-- My Work --> */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">
          A selection of my range of work
        </p>

        <div className="portfolio">
          {/* <!-- Portfolio item 01 --> */}
          <div className="portfolio__overlay">
            <img
              src={process.env.PUBLIC_URL + "/images/image-hub.jpg"}
              alt="port1"
              className="portfolio__img"
            />
            <div className="middle">
              <div className="text">
                <h3>Image Hub</h3>
                <p>React JS | HTML5 | Bootstrap </p>
                <Link to="/portfolio/1" className="portfolio__item btnn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Portfolio item 02 --> */}
          <div className="portfolio__overlay">
            <img
              src={process.env.PUBLIC_URL + "/images/vidly-large.jpg"}
              alt="port2"
              className="portfolio__img"
            />
            <div className="middle">
              <div className="text">
                <h3>Vidly Movie App</h3>
                <p>React JS | HTMl | Bootstrap </p>
                <Link to="/portfolio/2" className="portfolio__item btnn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Portfolio item 03 --> */}
          <div className="portfolio__overlay">
            <img
              src={process.env.PUBLIC_URL + "../images/brenda-travel.jpg"}
              alt="port3"
              className="portfolio__img"
            />
            <div className="middle">
              <div className="text">
                <h3>Brenda Travel</h3>
                <p> HTML5 | Bootstrap | JavaScript | CSS3 </p>
                <Link to="/portfolio/3" className="portfolio__item btnn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Portfolio item 04 --> */}
          <div className="portfolio__overlay">
            <img
              src={process.env.PUBLIC_URL + "/images/beautie-times.jpg"}
              alt="port4"
              className="portfolio__img"
            />
            <div className="middle">
              <div className="text">
                <h3>Beautie Times</h3>
                <p>CMS | WordPress | PHP </p>
                <Link to="/portfolio/4" className="portfolio__item btnn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2 className="section__title section__title--work">Contact Me</h2>
        <div className="contact-grid">
          <div className="grid-item1">
            <img
              src={process.env.PUBLIC_URL + "/images/contact-us.svg"}
              alt="contact-me"
            />
          </div>
          <div className="grid-item2">
            <p id="form-title">
              I am interested in freelance opportunities — small and large
              projects. However, if you have any question or request, don't
              hesistate to contact me.
            </p>

            <div className="form-container">
              <form action="https://usebasin.com/f/355f602626bd" method="POST">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your Name.."
                />

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email.."
                />

                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Message.."
                ></textarea>

                <div className="submit-row">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
