import React from "react";
import ProfileNav from "./ProfileNav";
import FavoritesContent from "./FavoritesContent";
import '../styles/FavoritesPage.css';


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