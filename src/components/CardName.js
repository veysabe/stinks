import React from 'react';

class CardName extends React.Component {
    render() {
        return (
            <a href="#" className="content-item__title">
                {this.props.name}
            </a>
        );
    }
}

export default CardName;