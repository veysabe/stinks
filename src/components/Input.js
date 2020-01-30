import React from 'react';

class Input extends React.Component {
    render() {
        return(
            <input type="text" className={this.props.className} placeholder={this.props.pholder} />
        );
    }
}

export default Input;