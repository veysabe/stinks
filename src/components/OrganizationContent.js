import React from 'react';
import Input from './Input';
import CardsContent from './CardFolder/CardsContent';
import items from '../data/BusinessCardsData';

class OrganizationContent extends React.Component {
    render() {
        return(
            <div className="profile__content">
                <h1>Организация - {this.props.organizationName}</h1>
                <div className="profile-box">
                    <Input pholder={'Имя'} className={"profile-box__input"}/>
                    <Input pholder={'Адрес'} className={"profile-box__input"}/>
                    <Input pholder={'Время'} className={"profile-box__input"}/>
                    <Input pholder={'Аватар'} className={"profile-box__input"}/>
                    <Input pholder={'Фото'} className={"profile-box__input"}/>
                    <textarea class="profile-box__text" placeholder="Описание организации"></textarea>
                    <div class="settings-btn">
                        Сохранить
                    </div>
                    <div className="btn-bs">Удалить организацию</div>
                    <CardsContent items={items} page={'business'} />
                </div>
            </div>
        );
    }
}

export default OrganizationContent;