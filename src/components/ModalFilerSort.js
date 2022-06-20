import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomSelect from "./CustomSelect";

const ModalFilerSort = ({ modalOpen, modalClose }) => {
  const history = useNavigate();

  const [searchFor, setSearchFor] = useState({
      searching: "",
      languageShow: "English",
      language: "en",
      countryShow: "USA",
      country: "us",
      categoryShow: "General",
      category: "general",
      sortBy: "publishedAt",
      dateFrom: "",
      dateTo: "",
    }),
    { searching, languageShow, countryShow, categoryShow, dateFrom, dateTo } =
      searchFor;

  const selectCategoryArray = [
    {
      selectLabel: "Category",
      optionName: "category",
      options: [
        {
          optionLabel: "General",
          idValue: "general",
        },
        {
          optionLabel: "Business",
          idValue: "business",
        },
        {
          optionLabel: "Entertainment",
          idValue: "entertainment",
        },
        {
          optionLabel: "Health",
          idValue: "health",
        },
        {
          optionLabel: "Science",
          idValue: "science",
        },
        {
          optionLabel: "Sports",
          idValue: "sports",
        },
        {
          optionLabel: "Technology",
          idValue: "technology",
        },
      ],
    },
  ];
  const selectCountryArray = [
    {
      selectLabel: "Country",
      optionName: "country",
      options: [
        {
          optionLabel: "Australia",
          idValue: "au",
        },
        {
          optionLabel: "USA",
          idValue: "us",
        },
        {
          optionLabel: "Philippines",
          idValue: "ph",
        },
        {
          optionLabel: "HongKong",
          idValue: "hk",
        },
      ],
    },
  ];
  const selectLanguageArray = [
    {
      selectLabel: "Language",
      optionName: "language",
      options: [
        {
          optionLabel: "English",
          idValue: "en",
        },
        {
          optionLabel: "Spanish",
          idValue: "es",
        },
        {
          optionLabel: "French",
          idValue: "fr",
        },
        {
          optionLabel: "Italian",
          idValue: "it",
        },
      ],
    },
  ];

  const handleSelect = (e, showVal) => {
    var shown = e.target.name + "Show";
    setSearchFor({
      ...searchFor,
      [e.target.name]: e.target.value,
      [shown]: showVal,
    });
  };
  const handleSortBy = (e) => {
    setSearchFor({ ...searchFor, [e.target.name]: e.target.value });
  };

  const handleArticleSearch = (e) => {
    e.preventDefault();
    document.body.style.overflow = "auto";
    history(`/search/${searching}`, { state: searchFor });
  };

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [modalOpen]);

  return (
    <>
      <div
        className={`overlay ${modalOpen ? "visible" : ""}`}
        onClick={modalClose}
      ></div>
      <div className={`modal ${modalOpen ? "visible" : ""}`}>
        <div className="modal-header">
          <h1 className="title">Search Articles</h1>
        </div>
        <form onSubmit={handleArticleSearch}>
          <div className="modal-body">
            <div className="search-con">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                id="search"
                name="searching"
                placeholder="Title | Key Words"
                required
                onChange={(e) => {
                  setSearchFor({
                    ...searchFor,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="filters">
              <h4>Filters</h4>
              <div className="cus-select-group">
                <CustomSelect
                  id="language"
                  show={languageShow}
                  args={selectLanguageArray}
                  taskSelect={handleSelect}
                />

                <CustomSelect
                  id="country"
                  show={countryShow}
                  args={selectCountryArray}
                  taskSelect={handleSelect}
                />

                <CustomSelect
                  id="category"
                  show={categoryShow}
                  args={selectCategoryArray}
                  taskSelect={handleSelect}
                />
              </div>
            </div>

            <div className="sortings">
              <h4>Sort By</h4>
              <div className="sortby">
                <div className="radio-grp">
                  <input
                    type="radio"
                    id="1"
                    value="relevancy"
                    name="sortBy"
                    onChange={handleSortBy}
                  />
                  <label htmlFor="1">Relevancy</label>
                </div>
                <div className="radio-grp">
                  <input
                    type="radio"
                    id="2"
                    value="popularity"
                    name="sortBy"
                    onChange={handleSortBy}
                  />
                  <label htmlFor="2">Popularity</label>
                </div>
                <div className="radio-grp">
                  <input
                    type="radio"
                    id="3"
                    value="publishedAt"
                    name="sortBy"
                    onChange={handleSortBy}
                  />
                  <label htmlFor="3">Published At</label>
                </div>
                <div className="radio-grp">
                  <input
                    type="radio"
                    id="4"
                    value="relevancy"
                    name="sortBy"
                    onChange={handleSortBy}
                  />
                  <label htmlFor="4">Relevancy</label>
                </div>
              </div>
              <div className="datetime-group">
                <div className="dt">
                  <label>From</label>
                  <input
                    type="datetime-local"
                    name="dateFrom"
                    value={dateFrom}
                    onChange={handleSortBy}
                  />
                </div>
                <div className="dt">
                  <label>To</label>
                  <input
                    type="datetime-local"
                    name="dateTo"
                    value={dateTo}
                    onChange={handleSortBy}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <div className="btn-group">
              <button type="submit">Search</button>
              <button type="button" onClick={modalClose}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalFilerSort;
