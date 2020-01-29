import React from 'react';
import ProfileInput from './ProfileInput';

class SettingsContent extends React.Component {
    render() {
        return(
            <div className="profile__content">
                <h1>Настройки</h1>
                <div className="profile-box">
                    <ProfileInput pholder={'Имя'} />
                    <ProfileInput pholder={'Телефон'} />
                    <ProfileInput pholder={'E-Mail'} />
                    <div class="settings-btn">
                        Сохранить
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsContent;