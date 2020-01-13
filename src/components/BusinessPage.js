import React from "react";

class BusinessPage extends React.Component {
    render() {
        return (
            <div class="profile content_w">
                <div class="profile__menu">
                    <ul class="profile__menu-list">
                        <li>
                            <span class="profile__menu-list-a active">Бизнес</span>
                        </li>
                        <li>
                            <a href="/favorites/" class="profile__menu-list-a">Избранное</a>
                        </li>
                        <li>
                            <a href="/settings/" class="profile__menu-list-a">Настройки</a>
                        </li>
                    </ul>
                </div>
                <div class="profile__content">
                    <h1>Бизнес</h1>
                    <div class="profile-box">
                        <div class="btn-bs" data-toggle="modal" data-target="#modalAddOrg">Создать организацию</div>
                        <div class="bs-cart">
                            <div class="box__content-item">
                                <a href="#" class="content-item__img">
                                    <img src="/local/templates/stinks/resource/img/preview.png" alt="услуги"/>
                                </a>
                                <a href="#" class="content-item__title">
                                    Спортзал “UNDERGROUND”
                                </a>
                                <div class="content-item__street">
                                    Ул. Мира, 5
                                </div>
                                <div class="content-item__time">
                                    9:00-22:00
                                </div>
                            </div>
                            <div class="box__content-item">
                                <a href="#" class="content-item__img">
                                    <img src="/local/templates/stinks/resource/img/preview.png" alt="услуги"/>
                                </a>
                                <a href="#" class="content-item__title">
                                    Спортзал “UNDERGROUND”
                                </a>
                                <div class="content-item__street">
                                    Ул. Мира, 5
                                </div>
                                <div class="content-item__time">
                                    9:00-22:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BusinessPage;