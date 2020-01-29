import React from "react";
import ProfileNav from "./ProfileNav";
import OrganizationContent from "./OrganizationContent";

class OrganizationPage extends React.Component {
    render() {
        return (
            <div className="profile content_w">
                <ProfileNav page={'organization'}/>
                <OrganizationContent organizationName={'Спортзал "Underground"'}/>
            </div>

        );
    }
}

export default OrganizationPage;