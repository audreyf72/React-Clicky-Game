import React from 'react';
import "./Jumbotron.css";


const Jumbotron = () => (
<div className="topWrap">
    <div className="topHeader">
        <div className="container text-center">
            <h1 className="display-4">Catcha Game!</h1>
            <div className="topHeaderImg"></div>
         </div>
    </div>
    <p className="subTitle">Click on a card to catch one. Don't click the same card twice or it will get away!</p>
</div>
);

export default Jumbotron;