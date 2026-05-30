import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NewsItem, formatNewsDate } from "./newsData";

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

// Shared news card used by both the /news list and the homepage teaser section.
const NewsCard = ({ news, index }: NewsCardProps) => {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-delay={100 * (index + 1)}
    >
      <div className="service-item position-relative h-100 d-flex flex-column">
        {news.image ? (
          <Image
            src={news.image.src}
            alt={news.title}
            width={news.image.width}
            height={news.image.height}
            className="img-fluid mb-3"
            style={{ borderRadius: "6px" }}
          />
        ) : (
          <div
            className="news-media mb-3 d-flex align-items-center justify-content-center"
            style={{
              height: "180px",
              borderRadius: "6px",
              backgroundColor: "#f0f2f4",
            }}
          >
            <i
              className="bi bi-image"
              style={{ fontSize: "2.5rem", color: "#c2c9d1" }}
            ></i>
          </div>
        )}
        <p className="mb-2">
          <i className="bi bi-calendar-event mr-4"></i>
          {formatNewsDate(news.date)}
        </p>
        <h3>{news.title}</h3>
        <p>{news.excerpt}</p>
        <Link
          href={`/news/${news.slug}`}
          className="readmore stretched-link mt-auto"
        >
          Read more <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
