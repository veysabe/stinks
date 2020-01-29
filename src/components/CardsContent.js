import React from "react";
import Card from "./Card";

function CardsContent(props) {
    const cards = props.items.map((item) => 
        <Card 
            key={item.id}
            id={item.id}
            name={item.name}
            imgSrc={item.imgSrc}
            address={item.address}
            openTime={item.openTime}
            closeTime={item.closeTime}
            page={props.page}
        />
    );
    return (
        <div className={`box__content content_wi ${props.page}`}>
            {cards}
        </div>
    );
}

export default CardsContent;