import React from "react";

class BoxIndex extends React.Component {
    render() {
        return(
            <div className="box__index content_w">
                <h2 className="h__title">{this.props.boxText}</h2>
            </div>
        );
    }
}

export default BoxIndex;