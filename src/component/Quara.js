import React from "react";
import '../css/Quara.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widget from "./Widget";



function Quara() {
    return (
        <div className="quara">
            <Navbar />
            <div className="quara__content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    )
}

export default Quara;