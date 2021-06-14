import React from "react";
import "./SearchResult.css";
import { useParams } from "react-router-dom";

export default function SearchResult() {
  let { searchText } = useParams();
  return (
    <div className="searchResult">
      <h1>I am the Results component</h1>
    </div>
  );
}
