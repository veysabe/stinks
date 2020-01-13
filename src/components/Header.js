import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="header content_w">
                <a href="/" className="header__logo">
                    <img src="https://stinks.ru/local/templates/stinks/resource/img/logo.png" alt="логотип"/>
                </a>
                <div className="header__search">
                    <select name="selectCategory" className="selectpicker">
                        <option value="" defaultValue>Любая категория</option>
                        <option value="Спорт">Спорт</option>
                        <option value="Красота">Красота</option>
                        <option value="Здоровье">Здоровье</option>
                    </select>
                    <input type="text" placeholder="Поиск" name="search" className="header__search-input"/>
                    <div className="header__search-btn">
                      Найти
                    </div>
                </div>
                <div className="header__btn">
                    <a href="#" className="header__entry" data-toggle="modal" data-target="#modalSign">Войти</a>
                    <a href="#" className="header__btn-reg" data-toggle="modal" data-target="#modalReg">Зарегистрироваться</a>
                </div>
            </div>
        );
    }
}

export default Header;