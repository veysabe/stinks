import React from "react";
import "../styles/App.css";
import SmallCard from "./SmallCard";

function App(props) {
    const cards = props.items.map((item) => 
        <SmallCard
            key={item.id} 
            id={item.id}
            imgSrc={item.imgSrc}
            price={item.price}
            name={item.name}
            score={item.score}
        />
    );
    return (
        <div className="card-block">
            {cards}
        </div>
    );
}

export default App;