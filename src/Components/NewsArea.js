import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "animate.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const NewsArea = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let pData = await data.json();
    setArticles(pData.articles);
    setTotalResults(pData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let pData = await data.json();
    setArticles(articles.concat(pData.articles));
    setTotalResults(pData.totalResults);
  };
  let noDesc = `No Description For This News, For More Detials Click Read More!`;
  return (
    <div>
      <React.StrictMode>
        <header>
          <div className="mainTitle">{props.category} News - Top Headlines</div>
          <ul className="categories">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/technology">
              <li>Technology</li>
            </Link>
            <Link to="/entertainment">
              <li>Entertainment</li>
            </Link>
            <Link to="/business">
              <li>Business</li>
            </Link>
            <Link to="/sports">
              <li>Sports</li>
            </Link>
            <Link to="/health">
              <li>Health</li>
            </Link>
            <Link to="/science">
              <li>Science</li>
            </Link>
          </ul>
        </header>
        <hr />
        <section className="newsArea">
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            {articles.map((news) => {
              return (
                <NewsItem
                  key={news.title}
                  title={news.title}
                  description={
                    news.description != null
                      ? news.description.slice(0, 200)
                      : noDesc
                  }
                  date={news.publishedAt}
                  image={news.urlToImage}
                  link={news.url}
                  author={news.author}
                />
              );
            })}
          </InfiniteScroll>
        </section>
      </React.StrictMode>
    </div>
  );
};

NewsArea.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};

export default NewsArea;
