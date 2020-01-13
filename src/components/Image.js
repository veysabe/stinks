import React from "react";

class Image extends React.Component {
    render() {
        return(
            <a href="#" className="content-item__img">
                { <img src={this.props.imgSrc} alt="услуги"/> }
            </a>
        );
    }
}

export default Image;