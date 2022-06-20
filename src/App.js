import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./designs/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleScreen from "./screens/ArticleScreen";
import SearchScreen from "./screens/SearchScreen";

function App() {
  return (
    <>
      <div className="outer-layer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/search/:titleKey" element={<SearchScreen />} />
            <Route path="/article/:title" element={<ArticleScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
