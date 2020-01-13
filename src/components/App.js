import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import BoxIndex from "./BoxIndex";
import CardsContent from "./CardsContent";
import items from "../data/CardsData";

class App extends React.Component {
    render () {
        return(
            <div>
                <Header />
                <BoxIndex />
                <CardsContent items={items}/>
                <Footer />
            </div>
        );
    }
}

export default App;