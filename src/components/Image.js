import React from 'react';

class Image extends React.Component {
    render () {
        return (
            <div className="card-image">
                <img src={this.props.imgSrc} />
            </div>
        );
    }
}

export default Image;