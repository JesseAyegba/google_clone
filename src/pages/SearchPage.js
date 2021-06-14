import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import "./SearchPage.css";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <Header />
      <Search />
      <p className="searchPage__information">Built by: JesseNeon</p>
    </div>
  );
}
