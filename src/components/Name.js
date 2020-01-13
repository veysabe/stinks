import React from 'react';

function Name(props) {
    return(
        <div className="card-name">
            <span className="card-name__text">
                {props.name}
            </span>
        </div>
    );
}

export default Name; 