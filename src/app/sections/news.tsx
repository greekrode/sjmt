import React from "react";
import { getLatestNews } from "../news/newsData";
import Link from "next/link";
import NewsCard from "../news/NewsCard";

const News = () => {
  const latestNews = getLatestNews(3);

  if (latestNews.length === 0) {
    return null;
  }

  return (
    <section id="news" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Latest News</h2>
          <p className="mt-5">
            Stay up to date with the latest from PT Surya Jaya Muliatama.
          </p>
        </div>

        <div className="row gy-4 mt-2">
          {latestNews.map((news, index) => (
            <NewsCard key={news.slug} news={news} index={index} />
          ))}
        </div>

        <div className="text-center mt-5">
          <Link href="/news" className="btn-get-started">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
