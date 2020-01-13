import React from 'react';
import Price from './Price';
import Name from './Name';
import Score from './Score';


function CardInfo(props) {
    return(
        <div className="card-info">
            <Price 
                price={props.price}
            />
            <Name 
                name={props.name}
            />
            <Score 
                score={props.score}
            />
        </div>
    );
}

export default CardInfo; 