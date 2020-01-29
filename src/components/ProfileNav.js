import React from 'react';

class ProfileNav extends React.Component {
    render() {
        if (this.props.page == "business") {
            return(
                <div className="profile__menu">
                    <ul className="profile__menu-list">
                        <li>
                            <span className="profile__menu-list-a active">Бизнес</span>
                        </li>
                        <li>
                            <a href="/favorites" className="profile__menu-list-a">Избранное</a>
                        </li>
                        <li>
                            <a href="/settings" className="profile__menu-list-a">Настройки</a>
                        </li>
                    </ul>
                </div>
            );
        } else if (this.props.page == "favorites") {
            return(
                <div className="profile__menu">
                    <ul className="profile__menu-list">
                        <li>
                            <a href="/business" className="profile__menu-list-a">Бизнес</a>
                        </li>
                        <li>
                            <span className="profile__menu-list-a active">Избранное</span>
                        </li>
                        <li>
                            <a href="/settings" className="profile__menu-list-a">Настройки</a>
                        </li>
                    </ul>
                </div>
            );
        } else if (this.props.page == "settings") {
            return(
                <div className="profile__menu">
                    <ul className="profile__menu-list">
                        <li>
                            <a href="/business" className="profile__menu-list-a">Бизнес</a>
                        </li>
                        <li>
                            <a href="/favorites" className="profile__menu-list-a">Избранное</a>
                        </li>
                        <li>
                            <span className="profile__menu-list-a active">Настройки</span>
                        </li>
                    </ul>
                </div>
            );
        }
    }
}

export default ProfileNav;