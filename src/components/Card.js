import React from "react";
import Image from "./Image";
import CardInfo from "./CardInfo";
import CardName from "./CardName";
import CardAddress from "./CardAddress";
import CardWorktime from "./CardWorktime";
import SmallButton from "./SmallButton";

class Card extends React.Component {
    render() {
        if (this.props.page == "index") {
            return(
                <div className="box__content-item" id={this.props.id}>
                    <Image 
                        imgSrc={this.props.imgSrc}
                    />
                    <CardName 
                        name={this.props.name}
                    />
                    <CardAddress 
                        address={this.props.address}
                    />
                    <CardWorktime
                        openTime={this.props.openTime}
                        closeTime={this.props.closeTime}
                    />
                    <SmallButton buttonText={"Записаться"} />
                </div>
            );
        } else if (this.props.page == "business") {
            return(
                <div className="box__content-item" id={this.props.id}>
                    <Image 
                        imgSrc={this.props.imgSrc}
                    />
                    <CardName 
                        name={this.props.name}
                    />
                    <CardAddress 
                        address={this.props.address}
                    />
                    <CardWorktime
                        openTime={this.props.openTime}
                        closeTime={this.props.closeTime}
                    />
                </div>
            );
        } else if (this.props.page == "favorites") {
            return(
                <div className="profile-box__list">
                    <div className="box__content-cart">
                        <input type="checkbox" />
                        <div className="box__content-item" id={this.props.id}>
                            <Image 
                                imgSrc={this.props.imgSrc}
                            />
                            <CardName 
                                name={this.props.name}
                            />
                            <CardAddress 
                                address={this.props.address}
                            />
                            <CardWorktime
                                openTime={this.props.openTime}
                                closeTime={this.props.closeTime}
                            />
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.page == "settings") {
            return(
                <div className="profile-box__list">
                    <div className="box__content-cart">
                        <input type="checkbox" />
                        <div className="box__content-item" id={this.props.id}>
                            <Image 
                                imgSrc={this.props.imgSrc}
                            />
                            <CardName 
                                name={this.props.name}
                            />
                            <CardAddress 
                                address={this.props.address}
                            />
                            <CardWorktime
                                openTime={this.props.openTime}
                                closeTime={this.props.closeTime}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}

export default Card;