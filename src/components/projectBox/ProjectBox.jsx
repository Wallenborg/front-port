import React, { useEffect, useRef } from "react";
import "./projectBox.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function ProjectBox({ title, infotext, link1, link2, imgSrc, bgcl, cl }) {
  return (
    <article
      className="box-project"
      style={{
        backgroundColor: bgcl,
        color: cl,
      }}
    >
      <div className="pixel-border"></div>
      <div className="project-title">
        <h2 className="project-title-text">{title}</h2>
      </div>
      <div className="project-img">
        <img
          className="webpageimg"
          src={imgSrc}
          alt="Landing page of a website"
        />
      </div>
      <div className="projekt-info">
        <div>{infotext}</div>
      </div>
      <div className="project-links">
        <div className="link-box">
          <BsFillArrowRightCircleFill className="link-icon" />
          <a href={link1} target="_blank" rel="noopener noreferrer">
            <p className="link-text" style={{ color: cl }}>
              LAUNCH SITE
            </p>
          </a>
        </div>
        <div className="link-box">
          <BsFillArrowRightCircleFill className="link-icon" />
          <a href={link2} target="_blank" rel="noopener noreferrer">
            <p className="link-text" style={{ color: cl }}>
              CODE
            </p>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectBox;
