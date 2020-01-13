import React from 'react';

class CardWorktime extends React.Component {
    render() {
        return(
            <div className="content-item__time">
                {this.props.openTime} - {this.props.closeTime}
            </div>
        );
    }
}

export default CardWorktime;