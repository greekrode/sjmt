import React from "react";
import { teamsData } from "../data";
import Image from "next/image";

const Teams = () => {
  const colSize = Math.floor(12 / teamsData.length);

  return (
    <>
      <section id="features" className="features section-bg">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row  g-2 d-flex">
            {teamsData.map((team, index) => (
              <li className={`nav-item col-${colSize}`} key={index}>
                <a
                  className={`nav-link ${index === 0 ? "active show" : ""}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#tab-${index}`}
                >
                  <h4 className="text-center">{team.name}</h4>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            {teamsData.map((team, index) => (
              <div
                className={`tab-pane ${index === 0 ? "active show" : ""}`}
                id={`tab-${index}`}
                key={index}
              >
                <div className="row">
                  {team.images.map((image, imgIndex) => (
                    <div
                      className="col-lg-4 order-1 order-lg-2 text-center teams-tab"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      key={imgIndex}
                    >
                      <Image
                        src={image.img.default.src}
                        width={image.img.default.width}
                        height={image.img.default.height}
                        alt={""}
                        className="img-fluid"
                        priority={true}
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
