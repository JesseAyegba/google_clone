import React, { useState, useEffect } from "react";
import "./Search.css";
import google from "../svgs/Google.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

function Search() {
  const [search, setSearch] = useState({
    query: "",
  });
  let handleSubmit = (e) => {
    // e.preventDefault();
  };
  let handleChange = (e) => {
    let text = e.target.value;
    setSearch({
      [e.target.name]: text,
    });
  };
  let url = "jsonData.json";
  
   useEffect(()=>{
     

     fetch(url).then((response)=>{
        return response.json;
     }).then((data)=>{
       console.log(data);
     })
   },[])
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
            name="query"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            className="search__input"
          />
          <BsFillMicFill className="search__icon search__icon--mic" />
        </div>
        <div className="search__buttons">
          <button className="search__button" type="submit">Google Search</button>
          <button className="search__button" type="submit">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
