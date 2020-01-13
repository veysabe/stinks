import React from "react";
import Card from "./Card";

function CardsContent(props) {
    const cards = props.items.map((item) => 
        <Card 
            key={item.id}
            id={item.id}
            name={item.name}
            imgSrc={item.imgSrc}
            adress={item.adress}
            openTime={item.openTime}
            closeTime={item.closeTime}
        />
    );
    return (
        <div className="box__content content_wi">
            {cards}
        </div>
    );
}

export default CardsContent;