import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import { useHistory } from "react-router-dom";


function NewManager(props) {
    const { saveNewManager } = props;
    const history = useHistory();

    const [managerFirstName, setManagerFirstName] = useState("")
    const [managerPassword, setManagerPassword] = useState("")
    const [managerEmail, setManagerEmail] = useState("")
    const [managerPasswordEmail, setManagerPasswordEmail] = useState("")
    const [errorManager, setErrorManager] = useState("")

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const sign = () => {
        if (managerFirstName === '') {
            setErrorManager('חובה להזין שם משתמש')
        } else if (managerPassword === '') {
            setErrorManager('חובה להזין סיסמא')
        } else if (managerEmail === '') {
            setErrorManager('חובה להזין מייל')
        } else if (managerPasswordEmail === '') {
            setErrorManager('חובה להזין סיסמת מייל')
        } else if (managerPassword.length < 4 || managerPassword.length > 10) {
            setErrorManager('סיסמא לא תקינה, הקש סיסמא באורך 4-8 תווים!')
        }
        else if ((!re.test(managerEmail))) {
            setErrorManager('כתובת המייל לא תקינה')
        } else {
            setErrorManager('')

            const manager = {
                userName: managerFirstName,
                password: managerPassword,
                email: managerEmail,
                passwordEmail: managerPasswordEmail,
            }
            saveNewManager(manager);
        }
    }

    return (
        <>
            < button class="btn-back" onClick={() => history.goBack()}  > אחורה</button >
            <div id="newUser">
                <div id="clientDetails">
                    <div class="form-group">
                        <label for="clientName">שם</label>
                        <input id="clientName" type="text" onChange={(e) => { setManagerFirstName(e.target.value) }} class="inputLogin form-control"
                            placeholder="הכנס שם" required="required" />
                    </div>
                    <div class="form-group">
                        <label for="clientPass">סיסמא</label>
                        <input id="clientPass" type="password" onChange={(e) => { setManagerPassword(e.target.value) }} class="inputLogin form-control"
                            placeholder="הכנס סיסמא" />
                    </div>
                    <div class="form-group">
                        <label for="clientEmail">דוא"ל</label>
                        <input id="clientEmail" type="email" onChange={(e) => { setManagerEmail(e.target.value) }} class="inputLogin form-control"
                            placeholder='הכנס דוא"ל' />
                    </div>
                    <div class="form-group">
                        <label for="clientEmail">סיסמת דוא"ל</label>
                        <input id="clientEmail" type="email" onChange={(e) => { setManagerPasswordEmail(e.target.value) }} class="inputLogin form-control"
                            placeholder='הכנס דוא"ל' />
                    </div>
                    <label class="danger">{errorManager}</label>
                    <button type="submit" class="buttonEnter" onClick={sign}>הרשם</button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    saveNewManager: (data) => dispatch(actions.saveNewManager({ data })),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewManager)
