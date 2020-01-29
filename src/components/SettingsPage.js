import React from "react";
import ProfileNav from "./ProfileNav";
import SettingsContent from "./SettingsContent";

class SettingsPage extends React.Component {
    render() {
        return (
            <div className="profile content_w">
                <ProfileNav page={'settings'}/>
                <SettingsContent />
            </div>

        );
    }
}

export default SettingsPage;