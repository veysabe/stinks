import React from 'react';

function Score(props) {
    return (
        <div className="card-score">
            {props.score}
        </div>
    );
}

export default Score;