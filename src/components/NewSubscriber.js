import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import { useHistory } from "react-router-dom";
import './newSubscriber.css'
function NewSubscriber(props) {
    const { saveNewSubscriber, manager } = props;
    const history = useHistory();
    const [subscriberLastName, setSubscriberLastName] = useState("")
    const [subscriberPassword, setSubscriberPassword] = useState("")
    const [subscriberEmail, setSubscriberEmail] = useState("")
    const [subscriberAccountNum, setSubscriberAccountNum] = useState("")
    const [subscriberBank, setSubscriberBank] = useState("")
    const [subscriberSnif, setSubscriberSnif] = useState("")
    const [subscriberTel, setSubscriberTel] = useState("")
    const [errorSubscription, setErrorSubscription] = useState("")

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const nodemailer = require("nodemailer");
    // var transporter = nodemailer.createTransport({
    //     // host: "smtp.ethereal.email",
    //     // port: 587,
    //     // secure: false,
    //     service: 'gmail',
    //     auth: {
    //         user: manager.managers.manager.email,
    //         pass: manager.managers.manager.passwordEmail
    //     },
    // });

    // var mailOption = {
    //     from: manager.managers.manager.email, // sender address
    //     to: subscriberEmail, // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    // }


    const sign = async () => {
        // await transporter.sendMail(
        //     mailOption, function (error, info) {
        //         if (error) {
        //             console.log("errrrrrrrrrrrrrrror");
        //         }
        //         else {
        //             console.log("email sennnnnnnnnnnnt" + info.response);
        //         }
        //     }
        // )
        if (subscriberLastName === '') {
            setErrorSubscription('חובה להזין שם משתמש')
        } else if (subscriberPassword === '') {
            setErrorSubscription('חובה להזין סיסמא')
        } else if (subscriberEmail === '') {
            setErrorSubscription('חובה להזין מייל')
        } else if (subscriberAccountNum === '') {
            setErrorSubscription('חובה להזין מספר החשבון')
        } else if (subscriberBank === '') {
            setErrorSubscription('חובה להזין מספר בנק')
        } else if (subscriberSnif === '') {
            setErrorSubscription('חובה להזין מספר סניף')
        } else if (subscriberPassword.length < 4 || subscriberPassword.length > 10) {
            setErrorSubscription('סיסמא לא תקינה, הקש סיסמא באורך 4-8 תווים!')
        }
        else if ((!re.test(subscriberEmail))) {
            setErrorSubscription('כתובת המייל לא תקינה')
        }
        // איך משתמשים ב validateEmail
        // לבדוק שסניף ומספר חשבון ומספר בנק הם רק מכילים מספר
        else if (subscriberAccountNum.length < 5 || subscriberAccountNum.length > 13 || !/^[0-9\b]+$/.test(subscriberAccountNum)) {
            setErrorSubscription('מספר החשבון שהוזן לא תקין')
        }
        else if (subscriberBank.length > 3 || subscriberBank.length === 0 || !/^[0-9\b]+$/.test(subscriberBank)) {
            setErrorSubscription('מספר הבנק שהוזן לא תקין')
            // לבדוק איך בודקים אם הוקשו רק מספרים
        } else if (subscriberSnif.length > 3 || subscriberSnif.length === 0 || !/^[0-9\b]+$/.test(subscriberSnif)) {
            setErrorSubscription('מספר הסניף שהוזן לא תקין')
        }
        else if (!(subscriberTel.match(/^\d{10}$/g))) {
            setErrorSubscription('מספר הטלפון שהוזן לא תקין')
        }
        else {
            setErrorSubscription('')
            // transporter.sendMail(
            //     mailOption, function (error, info) {
            //         if (error) {
            //             console.log("errrrrrrrrrrrrrrror");
            //         }
            //         else {
            //             console.log("email sennnnnnnnnnnnt" + info.response);
            //         }
            //     }
            // )
            const subscriber = {
                LastName: subscriberLastName,
                password: subscriberPassword,
                email: subscriberEmail,
                accountNum: subscriberAccountNum,
                bank: subscriberBank,
                snif: subscriberSnif,
                tel: subscriberTel
            }
            saveNewSubscriber(subscriber);
        }
    }



    return (
        <>
            < button class="btn-back" onClick={() => history.goBack()}  > אחורה</button >
            <div id="newUser">
                <div id="renterDetails">
                    <div class="twoparts">
                        <div class="form-group">
                            <label for="renterName">שם</label>
                            <input id="renterName" type="text" class="inputLogin form-control"
                                onChange={(e) => { setSubscriberLastName(e.target.value) }}
                                placeholder="הכנס שם" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="renterPass">סיסמא</label>
                            <input id="renterPass" type="password" class="inputLogin form-control"
                                onChange={(e) => { setSubscriberPassword(e.target.value) }}
                                placeholder="הכנס סיסמא" />
                        </div>

                        <div class="form-group">
                            <label for="renterEmail">דוא"ל</label>
                            <input id="renterEmail" type="email" class="inputLogin form-control"
                                onChange={(e) => { setSubscriberEmail(e.target.value) }}
                                placeholder='הכנס דוא"ל' />
                        </div>
                        <div class="form-group">
                            <label for="renterAccountNum">מס' חשבון</label>
                            <input id="renterAccountNum" type="text"
                                onChange={(e) => { setSubscriberAccountNum(e.target.value) }}
                                class="inputLogin form-control" placeholder="הכנס מס' חשבון" />
                        </div>
                    </div>
                    <div class="twoparts">
                        <div class="form-group">
                            <label for="renterBankNum">מס' בנק</label>
                            <input id="renterBankNum" type="text" class="inputLogin form-control"
                                onChange={(e) => { setSubscriberBank(e.target.value) }}
                                placeholder="הכנס מס' בנק" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="renterSnifNum">מס' סניף</label>
                            <input id="renterSnifNum" type="text" pattern="[0-9]*" class=" inputLogin form-control"
                                onChange={(e) => { setSubscriberSnif(e.target.value) }}
                                placeholder="הכנס מס' סניף" required="required" />
                        </div>


                        <div class="form-group">
                            <label for="renterTel">טלפון</label>
                            <input id="renterTel" type="email" class="inputLogin form-control"
                                onChange={(e) => { setSubscriberTel(e.target.value) }}
                                placeholder='הכנס טלפון' required="required" />
                        </div>

                        <label class="danger">{errorSubscription}</label>
                        <button type="submit" class="buttonEnter" onClick={sign}>הרשם</button>

                    </div>
                </div >
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    manager: state.manager,
})

const mapDispatchToProps = dispatch => ({
    saveNewSubscriber: (data) => dispatch(actions.saveNewSubscriber({ data })),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewSubscriber)