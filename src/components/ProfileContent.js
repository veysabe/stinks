import React from 'react';
import prevImage from "../img/preview.png";
import items from "../data/BusinessCardsData";
import CardsContent from './CardsContent';

class ProfileContent extends React.Component {
    render() {
        return(
            <div className="profile__content">
                <h1>Бизнес</h1>
                <div className="profile-box">
                    <div className="btn-bs" data-toggle="modal" data-target="#modalAddOrg">Создать организацию</div>
                    <CardsContent items={items} page={'business'}/>
                </div>
            </div>
        );
    }
}

export default ProfileContent;