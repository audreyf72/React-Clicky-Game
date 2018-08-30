import React from 'react';
import "./Jumbotron.css";


const Jumbotron = () => (
<div className="topWrap">
    <div className="topHeader">
        <div className="container text-center">
        <span>
            <div className="topHeaderImg"></div>
        </span>
         </div>
    </div>
    <p className="subTitle">Click on a card to catch one. Don't click the same card twice or it will get away!</p>
</div>
);

export default Jumbotron;