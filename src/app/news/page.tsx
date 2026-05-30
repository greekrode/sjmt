import React from "react";
import bgImg from "../assets/img/breadcrumbs-bg.jpg";
import { getAllNews } from "./newsData";
import NewsCard from "./NewsCard";
import { Metadata } from "next";

const Page = () => {
  const allNews = getAllNews();

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
          <h2>News</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>News</li>
          </ol>
        </div>
      </div>

      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          {allNews.length === 0 ? (
            <div className="text-center">
              <p>No news yet. Please check back soon.</p>
            </div>
          ) : (
            <div className="row gy-4">
              {allNews.map((news, index) => (
                <NewsCard key={news.slug} news={news} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "SJMT | News",
};
