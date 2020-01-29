import React from 'react';
import ProfileInput from './ProfileInput';
import CardsContent from './CardsContent';
import items from '../data/BusinessCardsData';

class OrganizationContent extends React.Component {
    render() {
        return(
            <div className="profile__content">
                <h1>Организация - {this.props.organizationName}</h1>
                <div className="profile-box">
                    <ProfileInput pholder={'Имя'} />
                    <ProfileInput pholder={'Адрес'} />
                    <ProfileInput pholder={'Время'} />
                    <ProfileInput pholder={'Аватар'} />
                    <ProfileInput pholder={'Фото'} />
                    <textarea class="profile-box__text" placeholder="Описание организации"></textarea>
                    <div class="settings-btn">
                        Сохранить
                    </div>
                    <div class="btn-bs">Удалить организацию</div>
                    <CardsContent items={items} page={'business'} />
                </div>
            </div>
        );
    }
}

export default OrganizationContent;