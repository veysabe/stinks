import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="footer__inner content_w">
                    <div className="footer__inner-logo">
                        <img src="https://stinks.ru/local/templates/stinks/resource/img/logo.png" alt="логотип"/>
                    </div>
                    <ul className="footer__menu">
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Вакансии</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                        <li>
                            <a href="#">Разместить услугу</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <div className="header__btn-reg" data-toggle="modal" data-target="#modalSupport">
                        Написать в поддержку
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;