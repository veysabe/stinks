import React from 'react';
import Input from './Input';

class SettingsContent extends React.Component {
    render() {
        return(
            <div className="profile__content">
                <h1>Настройки</h1>
                <div className="profile-box">
                    <Input pholder={'Имя'} className={"profile-box__input"}/>
                    <Input pholder={'Телефон'} className={"profile-box__input"}/>
                    <Input pholder={'E-Mail'} className={"profile-box__input"}/>
                    <div class="settings-btn">
                        Сохранить
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsContent;