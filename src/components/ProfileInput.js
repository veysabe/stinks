import React from 'react';

class ProfileInput extends React.Component {
    render() {
        return(
            <input type="text" class="profile-box__input" placeholder={this.props.pholder} />
        );
    }
}

export default ProfileInput;