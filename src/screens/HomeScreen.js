import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHeadlines } from "../redux/features/newsApi";
import ModalFilerSort from "../components/ModalFilerSort";
import PulseLoader from "../components/PulseLoader";
import searchImg from "../designs/search.png";
import filterImg from "../designs/filter.png";

const HomeScreen = () => {
  const { data, loading } = useSelector((state) => state.news);

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeadlines());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <section>
          <div className="hm-search-btn">
            <button onClick={() => setModalOpen(true)}>
              Search Articles&nbsp;
              <img src={searchImg} alt="" />
              &nbsp;||&nbsp;
              <img src={filterImg} alt="" />
            </button>
          </div>
          <ModalFilerSort
            modalOpen={modalOpen}
            modalClose={() => setModalOpen(false)}
          />
          <div className="flexi-cards">
            {loading ? (
              <PulseLoader />
            ) : (
              <>
                {data.map((headline, index) => (
                  <div className="card" key={index}>
                    <div className="card-header">
                      <div className="img-con">
                        <img src={headline.urlToImage} alt={headline.title} />
                      </div>
                      <div className="inner-shadow"></div>
                      <h1 className="title">
                        {headline.title.substring(0, 80)}...
                      </h1>
                    </div>
                    <div className="card-body">
                      <div className="upper">
                        <div className="author">
                          <b>Author:</b>{" "}
                          {headline.author ? headline.author : "N/A"}
                        </div>
                        <div className="published">
                          <b>Published:</b>&nbsp;
                          {new Date(headline.publishedAt)
                            .toString()
                            .slice(4, 15)}
                        </div>
                      </div>
                      <p>{headline.description}</p>
                      <Link to={`/article/${headline.title}`} state={headline}>
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

export default HomeScreen;
