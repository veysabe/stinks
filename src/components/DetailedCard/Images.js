import React from "react";
import Mainimage from "./Mainimage";
import MiniImages from "./MiniImages";

const Images = () => {
    return(
        <div className='card-leftside__images'>
            <MiniImages />
            <Mainimage />
        </div>
    );
}

export default Images;