import React from "react";
import BoxIndex from "./BoxIndex";
import CardsContent from "./CardsContent";
import items from "../data/CardsData";

class IndexPage extends React.Component {
    render () {
        return(
            <div>
                <BoxIndex boxText={"Разные услуги"}/>
                <CardsContent items={items}/>
            </div>
        );
    }
}

export default IndexPage;