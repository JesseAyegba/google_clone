import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState({
    query: "",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  let handleChange = (e) => {
    let text = e.target.value;
    setSearch({
      [e.target.name]: text,
    });
  };
  return (
    <div className="search">
      <form onSubmit={(e) => handleSubmit(e)} className="search__form">
        <input
          name="query"
          onChange={(e) => handleChange(e)}
          required
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
