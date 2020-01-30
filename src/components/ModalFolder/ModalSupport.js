import React from "react";

class ModalSupport extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalSupport" tabindex="-1" role="dialog" aria-labelledby="modalRegTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                Сообщение
                            </h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal__sign modal__support">
                                <input type="text" name="supportName" placeholder="Имя" />
                                <input type="text" name="supportEmail" placeholder="E-mail" />
                                <textarea name="supportText" placeholder="Сообщение"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary header__btn-reg btn_reg">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalSupport;