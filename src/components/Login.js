import React from 'react'
import { withRouter } from 'react-router'
import './login.css'
import history from '../config/history'


function Login(props) {
    const loginSubscriber = () => {
        history.push('/LoginSubscriber')
    }
    const loginUser = () => {
        history.push('/loginUser')

    }
    const loginManager = () => {
        history.push('/LoginManager')
    }

    return (
        <div class="d-flex align-items-end justify-content-around " style={{ direction: "rtl" }}>
            <button class=" btn-login" onClick={loginSubscriber}>כניסת מנוי</button>
            <button class=" btn-login" onClick={loginUser} > כניסת משתמש</button >
            <button class="btn-login" onClick={loginManager} > כניסת מנהל</button >
        </div >
    )
}

export default withRouter(Login)
