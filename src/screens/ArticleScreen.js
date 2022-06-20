import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backImg from "../designs/back.png";

const ArticleScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <div className="container">
        <section>
          <div className="article">
            <div className="back-btn">
              <button onClick={() => navigate(-1)}>
                <img src={backImg} alt="" />
                &nbsp;Back
              </button>
            </div>
            <div className="img-con">
              <img src={state.urlToImage} alt={state.title} />
            </div>
            <div className="article-body">
              <h1 className="title">{state.title}</h1>
              <div className="autpub">
                <div className="author">
                  <b>Author:</b>&nbsp;{state.author}
                </div>
                <div className="published">
                  <b>Published At:</b>&nbsp;
                  {new Date(state.publishedAt).toString().slice(0, 34)}
                </div>
              </div>
              <div className="description">{state.description}</div>
              <div className="content">{state.content}</div>
              <div className="contentExtra">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticleScreen;
