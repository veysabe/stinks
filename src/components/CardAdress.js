import React from 'react';

class CardAdress extends React.Component {
    render() {
        return (
            <div className="content-item__street">
                {this.props.adress}
            </div>
        );
    }
}

export default CardAdress; 