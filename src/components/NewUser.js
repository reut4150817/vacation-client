import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import { useHistory } from "react-router-dom";


function NewUser(props) {
    const { saveNewUser } = props;
    const history = useHistory();

    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [errorUser, setErrorUser] = useState("")

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const sign = () => {
        if (userFirstName === '') {
            setErrorUser('חובה להזין שם משתמש')
        } else if (userLastName === '') {
            setErrorUser('חובה להזין משפחה ')
        } else if (userPassword === '') {
            setErrorUser('חובה להזין סיסמא')
        } else if (userEmail === '') {
            setErrorUser('חובה להזין מייל')
        } else if (userPassword.length < 4 || userPassword.length > 10) {
            setErrorUser('סיסמא לא תקינה, הקש סיסמא באורך 4-8 תווים!')
        }
        else if ((!re.test(userEmail))) {
            setErrorUser('כתובת המייל לא תקינה')
        } else {
            setErrorUser('')

            const user = {
                FirstName: userFirstName,
                LastName: userLastName,
                password: userPassword,
                email: userEmail,
            }
            saveNewUser(user);
        }
    }

    return (
        <>
            < button class="btn-back" onClick={() => history.goBack()}  > אחורה</button >
            <div id="newUser">
                <div id="clientDetails">
                    <div class="form-group">
                        <label for="clientName">שם פרטי</label>
                        <input id="clientName" type="text" onChange={(e) => { setUserFirstName(e.target.value) }} class="inputLogin form-control"
                            placeholder="הכנס שם" required="required" />
                    </div>
                    <div class="form-group">
                        <label for="clientName">שם משפחה</label>
                        <input id="clientName" type="text" onChange={(e) => { setUserLastName(e.target.value) }} class="inputLogin form-control"
                            placeholder="הכנס שם" required="required" />
                    </div>

                    <div class="form-group">
                        <label for="clientPass">סיסמא</label>
                        <input id="clientPass" type="password" onChange={(e) => { setUserPassword(e.target.value) }} class="inputLogin form-control"
                            placeholder="הכנס סיסמא" />
                    </div>

                    <div class="form-group">
                        <label for="clientEmail">דוא"ל</label>
                        <input id="clientEmail" type="email" onChange={(e) => { setUserEmail(e.target.value) }} class="inputLogin form-control"
                            placeholder='הכנס דוא"ל' />
                    </div>

                    <label class="danger">{errorUser}</label>
                    <button type="submit" class="buttonEnter" onClick={sign}>הרשם</button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    saveNewUser: (data) => dispatch(actions.saveNewUser({ data })),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
