import React from "react";
import $ from "jquery";

class ModalReg extends React.Component {
    componentDidMount() {
        $('#btnRegistration').on('click', function(){
            let objData = {
                'regName': $('[name="regName"]').val().trim(),
                'regPhone': $('[name="regPhone"]').val().trim(),
                'regEmail': $('[name="regEmail"]').val().trim(),
                'regPass': $('[name="regPass"]').val().trim(),
            };
            if( objData.regName && objData.regPhone && objData.regEmail && objData.regPass ){
                // $.ajax({
                //     url: "/local/ajax/reg.php",
                //     data: objData,
                //     success: function(data){
                //         console.log(data);
        
                //         $('.ms-alert_success').removeClass('hidden');
                //         $('.ms-alert_error').addClass('hidden');
                //     }
                // });
                $('.ms-alert_success').removeClass('hidden');
                $('.ms-alert_error').addClass('hidden');
            }else{
                $('.ms-alert_success').addClass('hidden');
                $('.ms-alert_error').removeClass('hidden');
            }
        });
    }
    render() {
        return (
            <div className="modal fade" id="modalReg" tabIndex="-1" role="dialog" aria-labelledby="modalRegTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                Регистрация
                            </h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="ms-alert">
                            <div className="ms-alert_success hidden">
                                Регистрация прошла успешно. На ваш E-mail отправлено письмо для подтверждения регистрации
                            </div>
                            <div className="ms-alert_error hidden">
                                Проверьте правильность ввода данных!
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="modal__sign">
                                <input type="text" name="regName" placeholder="Имя"/>
                                <input type="text" name="regPhone" placeholder="Телефон"/>
                                <input type="text" name="regEmail" placeholder="E-mail"/>
                                <input type="password" name="regPass" placeholder="Пароль"/>
                            </div>
                            <button type="button" className="btn btn-primary header__btn-reg btn_reg" id="btnRegistration">Зарегистрироваться</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalReg;