import React from "react";
import "../Styles/Home.css";
// import { Link } from "react-router-dom";

function Home() {
    function buttonHover(e) {
        if (e.target.className.includes("uHover")) {
            e.target.className = "uButtonSmall uGray uLightGrayText";
        } else {
            e.target.className = 'uButtonSmall uGray uLightGrayText uHoverSmall'
        }
    }

    return (
        <div>
            <h2> Welcome to Cheese App</h2>
            <p>Cheese app will give you a description of your favorite cheese, and recommend a beverage pairing!</p>
        </div>
    );
}

export default Home;