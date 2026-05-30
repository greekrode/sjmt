import React from "react";
import bgImg from "../../assets/img/breadcrumbs-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug, newsData, formatNewsDate } from "../newsData";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return newsData.map((news) => ({ slug: news.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const news = getNewsBySlug(params.slug);
  return {
    title: news ? `SJMT | News | ${news.title}` : "SJMT | News",
  };
}

const Page = ({ params }: Props) => {
  const news = getNewsBySlug(params.slug);

  if (!news) {
    notFound();
  }

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
            <li>
              <a href="/news">News</a>
            </li>
            <li>{news.title}</li>
          </ol>
        </div>
      </div>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2>{news.title}</h2>
              <p className="display-7">
                <i className="bi bi-calendar-event mr-4"></i>
                {formatNewsDate(news.date)}
                {news.author && (
                  <span className="ms-3">
                    <i className="bi bi-person mr-4"></i>
                    {news.author}
                  </span>
                )}
              </p>

              {news.image ? (
                <Image
                  src={news.image.src}
                  alt={news.title}
                  width={news.image.width}
                  height={news.image.height}
                  className="img-fluid my-4"
                  style={{ borderRadius: "8px" }}
                  priority
                />
              ) : (
                <div
                  className="news-cover my-4 d-flex align-items-center justify-content-center"
                  style={{
                    height: "320px",
                    borderRadius: "8px",
                    backgroundColor: "#f0f2f4",
                  }}
                >
                  <i
                    className="bi bi-image"
                    style={{ fontSize: "3.5rem", color: "#c2c9d1" }}
                  ></i>
                </div>
              )}

              {news.content.map((paragraph, index) => (
                <p key={index} className="mt-3">
                  {paragraph}
                </p>
              ))}

              <div className="mt-4">
                <Link href="/news" className="readmore">
                  <i className="bi bi-arrow-left"></i> Back to all news
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
