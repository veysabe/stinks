import React from "react";
import Image from "./Image";
import CardInfo from "./CardInfo";
import CardName from "./CardName";
import CardAdress from "./CardAdress";
import CardWorktime from "./CardWorktime";
import SmallButton from "./SmallButton";

class Card extends React.Component {
    render() {
        return(
            <div className="box__content-item" id={this.props.id}>
                <Image 
                    imgSrc={this.props.imgSrc}
                />
                <CardName 
                    name={this.props.name}
                />
                <CardAdress 
                    adress={this.props.adress}
                />
                <CardWorktime
                    openTime={this.props.openTime}
                    closeTime={this.props.closeTime}
                />
                <SmallButton buttonText={"Записаться"} />
            </div>
        );
    }
}

export default Card;