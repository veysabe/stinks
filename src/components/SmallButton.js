import React from "react";

class SmallButton extends React.Component {
    render() {
        return (
            <div className="small-blue-btn">
                {this.props.buttonText}
            </div>
        );
    }
}

export default SmallButton;