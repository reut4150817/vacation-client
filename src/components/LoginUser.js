import React, { useState } from 'react'
import './LoginUser.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import men from '../assets/men.png'
import lock from '../assets/lock.png'

function LoginUser(props) {
    const { connectU, userExist } = props;

    const [userName, setUserName] = useState("")
    const [userPersonalCode, setUserPersonalCode] = useState("")
    const [errorMessasge, setErrorMessasge] = useState("")

    const history = useHistory();



    const newUser = () => {

        history.push('/NewUser')
    }
    const connectUser = () => {

        connectU({ name: userName, password: userPersonalCode })
        if (userExist.userExist.name == null) {
            // return <Redirect to="/NewUser" />

            setErrorMessasge('שם משתמש וסיסמא לא נמצאו')
        }
        else
            // history.push("/UserArea")

            setErrorMessasge('שם משתמש וסיסמא לא נמצאו')

    }
    return (
        <div className="d-flex justify-content-around" >
            <div id="existUser" class="d-flex flex-column m-auto justify-content-around align-items-center" >
                <h1 id="title">Login</h1>
                <div class="textbox">

                    <img src={men} />
                    <input type="text" type placeholder="הקש שם" onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div class="textbox">
                    <img src={lock} />
                    <input type="password" placeholder="הקש סיסמא" onChange={(e) => { setUserPersonalCode(e.target.value) }} />
                </div>
                <label for="connect" class="error-label" >{errorMessasge}</label>
                {/* *ngIf="errorMessasge">{{ errorMessasge }} */}
                <button type="submit" onClick={connectUser} class="btn-connect">התחבר</button>
                <div onClick={newUser}>משתמש חדש ? לחץ כאן</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userExist: state.userExist,
})

const mapDispatchToProps = dispatch => ({
    connectU: (data) => dispatch(actions.connectU(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUser)