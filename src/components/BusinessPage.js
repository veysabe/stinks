import React from "react";
import ProfileNav from "./ProfileNav";
import ProfileContent from "./ProfileContent";

class BusinessPage extends React.Component {
    render() {
        return (
            <div className="profile content_w">
                <ProfileNav page={'business'}/>
                <ProfileContent />
            </div>

        );
    }
}

export default BusinessPage;