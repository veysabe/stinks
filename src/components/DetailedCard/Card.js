import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Card = () => {
    return(
        <div className="card-block-content">
            <Leftside />
            <Rightside />
        </div>
    );
}

export default Card;