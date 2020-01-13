import React from 'react';

function Price(props) {
    return(
        <div className="card-price">
            <span className="card-price__text">
                {props.price}
            </span>
        </div>
    );
}

export default Price; 