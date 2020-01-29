import React from "react";
import ProfileNav from "./ProfileNav";
import ProfileContent from "./ProfileContent";
import FavoritesContent from "./FavoritesContent";

class FavoritesPage extends React.Component {
    render() {
        return (
            <div className="profile content_w">
                <ProfileNav page={"favorites"}/>
                <FavoritesContent />
            </div>

        );
    }
}

export default FavoritesPage;