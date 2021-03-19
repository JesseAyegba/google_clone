import React from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
    return(
        <div className="app">
            <Search />
            <p className="app__information">Built by: JesseNeon</p>
        </div>
    )
}

export default App;