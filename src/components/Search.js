import React, { useState } from "react";
import "./Search.css";
import google from "../svgs/Google.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { Redirect } from "react-router";

export default function Search() {
  const [search, setSearch] = useState({
    searchText: "",
  });
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    setSubmit(!submit);
    return <Redirect to="/search/Something/" />;
  };

  const handleClick = () => {
    setSubmit(!submit);
    return <Redirect to="/search/Something/" />;
  };

  const handleChange = (e) => {
    let text = e.target.value;
    setSearch({
      [e.target.name]: text,
    });
  };

  return (
    <div className="search">
      <div className="search__imageWrapper">
        <img className="search__image" src={google} alt="Google Logo" />
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="search__form"
        autoComplete="off"
      >
        <div className="search__box">
          <AiOutlineSearch className="search__icon" />
          <input
            name="searchText"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            className="search__input"
          />
          <BsFillMicFill className="search__icon search__icon--mic" />
        </div>
        <div className="search__buttons">
          <button onClick={() => handleClick()} className="search__button">
            Google Search
          </button>
          <button onClick={() => handleClick()} className="search__button">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
}
