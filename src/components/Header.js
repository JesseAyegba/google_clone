import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__options">
        <div className="header__links">
          <Link exact to="/">
            Gmail
          </Link>
          <Link exact to="/">
            Images
          </Link>
        </div>
        <CgMenuGridO className="header__grid" />
      </div>
    </div>
  );
}
