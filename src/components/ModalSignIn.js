import React from "react";
import $ from "jquery";

class ModalSignIn extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalSign" tabIndex="-1" role="dialog" aria-labelledby="modalSignTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-box__sign">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Войти
                                </h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal__sign">
                                    <input type="text" name="signEmail" placeholder="E-mail"/>
                                    <input type="password" name="signPass" placeholder="Пароль"/>
                                </div>
                                <button type="button" className="btn btn-primary header__btn-reg">Войти</button>
                            </div>
                            <div className="modal-rec__link">
                                Забыли свой пароль? <span id="btnRec">Восстановите его</span>
                            </div>
                        </div>
                        <div className="modal-box__rec hidden">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Восстановление пароля
                                </h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal__sign">
                                    <input type="text" name="signEmail" placeholder="E-mail"/>
                                </div>
                                <button type="button" className="btn btn-primary header__btn-reg">Восстановить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalSignIn;