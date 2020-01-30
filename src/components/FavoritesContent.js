import React from 'react';
import prevImage from "../img/preview.png";
import items from "../data/BusinessCardsData";
import CardsContent from './CardFolder/CardsContent';

class FavoritesContent extends React.Component {
    render() {
        return(
            <div className="profile__content">
                <h1>Избранное</h1>
                <div className="profile-box">
                    <div className="profile-control">
                        <input type="checkbox"/>
                        <div className="btn-profile__del">
                            Удалить
                        </div>
                    </div>
                    <CardsContent items={items} page={'favorites'}/>
                </div>
            </div>
        );
    }
}

export default FavoritesContent;