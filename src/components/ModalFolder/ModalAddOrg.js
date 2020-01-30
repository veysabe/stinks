import React from "react";
import "../../styles/Modals.css";

class ModalAddOrg extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalAddOrg" tabindex="-1" role="dialog" aria-labelledby="modalAddOrgTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                Создание организации
                            </h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal__sign modal__support">
                                <input type="text" name="supportName" placeholder="Название" />
                                <input type="text" name="supportName" placeholder="Выбрать файл" />
                                <input type="text" name="supportName" placeholder="Адрес" />
                                <input type="text" name="supportName" placeholder="Время работы" />
                            </div>
                            <button type="button" className="btn btn-primary header__btn-reg btn_reg">Создать</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAddOrg;