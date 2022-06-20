import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredHeadlines } from "../redux/features/newsApi";
import PulseLoader from "../components/PulseLoader";
import backImg from "../designs/back.png";

const SearchScreen = () => {
  const location = useLocation();
  const { data, loading } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredHeadlines(location.state));
  }, [dispatch, location.state]);

  return (
    <>
      <div className="container">
        <section>
          <div className="ss-back-btn">
            <Link to="/" className="srchSrn-bbtn">
              <img src={backImg} alt="" />
              &nbsp;Back
            </Link>
          </div>
          <div className="flexi-cards">
            {loading ? (
              <PulseLoader />
            ) : (
              <>
                {data.map((article, index) => (
                  <div className="card" key={index}>
                    <div className="card-header">
                      <div className="img-con">
                        <img src={article.urlToImage} alt={article.title} />
                      </div>
                      <div className="inner-shadow"></div>
                      <h1 className="title">
                        {article.title.substring(0, 80)}...
                      </h1>
                    </div>
                    <div className="card-body">
                      <div className="upper">
                        <div className="author">
                          <b>Author:</b>{" "}
                          {article.author ? article.author : "N/A"}
                        </div>
                        <div className="published">
                          <b>Published:</b>&nbsp;
                          {new Date(article.publishedAt)
                            .toString()
                            .slice(4, 15)}
                        </div>
                      </div>
                      <p>{article.description}</p>
                      <Link to={`/article/${article.title}`} state={article}>
                        Read Full Article
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchScreen;
