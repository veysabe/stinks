import React from "react";
import $ from "jquery";
import axios from 'axios';

function onClick(e) {
    e.preventDefault();
    ;
}

class ModalReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nameCheck: false,
            phoneCheck: false,
            emailCheck: false,
            passwordCheck: false,
            errorVisibility: "hidden",
            successVisibility: "hidden",
        }

        this.regData = {
            name: '',
            phone: '',
            email: '',
            password: '',
        }
        
        this.butClick = this.butClick.bind(this);
        this.checkNameInput = this.checkNameInput.bind(this);
        this.checkEmailInput = this.checkEmailInput.bind(this);
        this.checkPhoneInput = this.checkPhoneInput.bind(this);
        this.checkPasswordInput = this.checkPasswordInput.bind(this);
    }

    butClick() {
        if (this.state.nameCheck && 
            this.state.phoneCheck && 
            this.state.emailCheck &&
            this.state.passwordCheck) {
                this.setState({successVisibility: ""});
                this.setState({errorVisibility: "hidden"});
                const userRegData = { 
                    name: this.regData.name,
                    phone: this.regData.phone,
                    email: this.regData.email,
                    password: this.regData.password
                }
            } else {
                this.setState({successVisibility: "hidden"});
                this.setState({errorVisibility: ""});
            }
            
    }

    checkNameInput(e) {
        if (e.target.value != "") {
            this.setState({ nameCheck: true });
            this.regData.name = e.target.value;
        } else {
            this.setState({ nameCheck: false });
        }
    }

    checkEmailInput(e) {
        if (e.target.value != "") {
            this.setState({ emailCheck: true });
            this.regData.email = e.target.value;
        } else {
            this.setState({ emailCheck: false });
        }
    }

    checkPhoneInput(e) {
        if (e.target.value != "") {
            this.setState({ phoneCheck: true });
            this.regData.phone = e.target.value;
        } else {
            this.setState({ phoneCheck: false });
        }
    }

    checkPasswordInput(e) {
        if (e.target.value != "") {
            this.setState({ passwordCheck: true });
            this.regData.password = e.target.value;
        } else {
            this.setState({ passwordCheck: false });
        }
    }

    // componentDidMount() {
    //     $('#btnRegistration').on('click', function(){
    //         let objData = {
    //             'regName': $('[name="regName"]').val().trim(),
    //             'regPhone': $('[name="regPhone"]').val().trim(),
    //             'regEmail': $('[name="regEmail"]').val().trim(),
    //             'regPass': $('[name="regPass"]').val().trim(),
    //         };
    //         if( objData.regName && objData.regPhone && objData.regEmail && objData.regPass ){
    //             // $.ajax({
    //             //     url: "/local/ajax/reg.php",
    //             //     data: objData,
    //             //     success: function(data){
    //             //         console.log(data);
        
    //             //         $('.ms-alert_success').removeClass('hidden');
    //             //         $('.ms-alert_error').addClass('hidden');
    //             //     }
    //             // });
    //             $('.ms-alert_success').removeClass('hidden');
    //             $('.ms-alert_error').addClass('hidden');
    //         } else {
    //             $('.ms-alert_success').addClass('hidden');
    //             $('.ms-alert_error').removeClass('hidden');
    //         }
    //     });
    // }

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
                            <div className={"ms-alert_success" + ' ' + this.state.successVisibility}>
                                Регистрация прошла успешно. На ваш E-mail отправлено письмо для подтверждения регистрации
                            </div>
                            <div className={"ms-alert_error" + ' ' + this.state.errorVisibility}>
                                Проверьте правильность ввода данных!
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="modal__sign">
                                <input type="text" name="regName" placeholder="Имя" onChange={this.checkNameInput}/>
                                <input type="text" name="regPhone" placeholder="Телефон" onChange={this.checkPhoneInput}/>
                                <input type="text" name="regEmail" placeholder="E-mail" onChange={this.checkEmailInput}/>
                                <input type="password" name="regPass" placeholder="Пароль" onChange={this.checkPasswordInput}/>
                            </div>
                            <button type="button" className="btn btn-primary header__btn-reg btn_reg" id="btnRegistration" onClick={this.butClick}>
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalReg;