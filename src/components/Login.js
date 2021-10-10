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
        <div class="d-flex align-items-center justify-content-around " style={{ direction: "rtl", height: "100vh" }}>
            <button class=" btn-login" onClick={loginSubscriber}>כניסת מנוי</button>
            <button class=" btn-login" onClick={loginUser} > כניסת משתמש</button >
            <button class="btn-login" onClick={loginManager} > כניסת מנהל</button >
            {/* <Link /> */}
        </div >
    )
}

export default withRouter(Login)
