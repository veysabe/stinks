import React from "react";
import BoxIndex from "./BoxIndex";
import CardsContent from "./CardFolder/CardsContent";
import items from "../data/IndexCardsData";

class IndexPage extends React.Component {
    render () {
        return(
            <div>
                <BoxIndex boxText={"Разные услуги"}/>
                <CardsContent items={items} page={'index'} buttonText={"Записаться"}/>
            </div>
        );
    }
}

export default IndexPage;