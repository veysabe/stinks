import React from 'react';

class CardAddress extends React.Component {
    render() {
        return (
            <div className="content-item__street">
                {this.props.address}
            </div>
        );
    }
}

export default CardAddress; 