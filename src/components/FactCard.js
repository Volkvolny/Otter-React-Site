import React from "react";
import './FactCard.css';

function FactCard (props) {
    return (
        <>
            <div className={props.className}>
                <h3>{props.factNumber}</h3>
                <p>{props.fact}</p>
            </div>
        </>
    )
}

export default FactCard;