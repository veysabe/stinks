import React from 'react';
import Image from './Image';
import CardInfo from './CardInfo';
import SmallButton from './SmallButton';

class SmallCard extends React.Component {
    render() {
        return(
            <div className="card-item" id={this.props.id}>
                <div className="card-item-content">
                    <Image 
                        imgSrc={this.props.imgSrc}
                    />
                    <CardInfo
                        price={this.props.price} 
                        name={this.props.name}
                        score={this.props.score}
                    />
                    <SmallButton buttonText="В корзину"/>
                </div>
            </div>
        );
    }
}

export default SmallCard; 