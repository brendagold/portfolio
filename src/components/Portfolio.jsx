import React from "react";
import { useParams } from "react-router-dom";
import content from "../portfolioContent";
import ScrollToTop from "./Scroll-Up";

const Portfolio = () => {
  const { portId } = useParams();

  const contents = content.find((item) => item._id === portId);

  return (
    <div>
      <section className="intro1">
        <h1 className="section__title section__title--intro1">
          <strong>{contents.title}</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          {contents.subtitle}
        </p>
        {/* <img src={contents.src} alt={contents.title} className="intro__img1" /> */}
      </section>

      <div className="portfolio-item-individual">
        <p>{contents.description}</p>
        <img src={contents.src} alt={contents.title} className="port-img" />
        <p>
          To learn more about these projects{" "}
          <a href={contents.url}>click here</a>
        </p>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
