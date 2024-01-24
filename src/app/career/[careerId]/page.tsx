import { Metadata } from "next";
import bgImg from "../../assets/img/breadcrumbs-bg.jpg";
import React from "react";
import { careerData } from "@/app/data";
import Link from "next/link";

const Page = ({ params }: { params: { careerId: string } }) => {
  const careerDataDetail = careerData.find(
    (career) => career.id === Number(params.careerId)
  );

  return (
    <>
      <div
        className="breadcrumbs d-flex align-items-center"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      >
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>Careers</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/career">Careers</a>
            </li>
            <li>{careerDataDetail?.name || ""}</li>
          </ol>
        </div>
      </div>

      <section id="career-details" className="career-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              <h2>{careerDataDetail?.name || ""}</h2>
              <ul>
                <li>
                  <i className="bi bi-buildings-fill mr-4"></i>{" "}
                  <span>{careerDataDetail?.team}</span>
                </li>
                <li>
                  <i className="bi bi-clock-fill mr-4"></i>{" "}
                  <span>{careerDataDetail?.work_time}</span>
                </li>
                <li>
                  <i className="bi bi-mortarboard-fill mr-4"></i>{" "}
                  <span>{careerDataDetail?.edu}</span>
                </li>
                <li>
                  <i className="bi bi-briefcase-fill mr-4"></i>{" "}
                  <span>{`${careerDataDetail?.yoe} year of experience`}</span>
                </li>
              </ul>
              <h3 className="mt-5">Skills</h3>
              <ul className="horizontal-list">
                {careerDataDetail?.skills?.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <Link href="https://forms.gle/Uv1BPTj1GaKhSpN97" target="_blank">
                <span className="btn btn-primary btn-lg apply-btn">
                  <i className="bi bi-pencil-square"></i> Apply Now!
                </span>
              </Link>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6">
              {careerDataDetail?.qualifications && (
                <>
                  <h3 className="mt-5">Qualifications</h3>
                  <ul className="job-desc">
                    {careerDataDetail.qualifications.map(
                      (qualification, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle"></i>
                          <span>{qualification.name}</span>
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
            </div>

            <div className="col-lg-6">
              {careerDataDetail?.job_desc && (
                <>
                  <h3 className="mt-5">Job Descriptions</h3>
                  <ul className="job-desc">
                    {careerDataDetail.job_desc.map((jd, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle"></i>
                        <span>{jd.name}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "SJMT | Careers",
};
