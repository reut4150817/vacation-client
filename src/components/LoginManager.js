import React, { useState } from 'react'
// import './LoginManager.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import { useHistory } from "react-router-dom";
import men from '../assets/men.png'
import lock from '../assets/lock.png'

function LoginManager(props) {
    const { connectM } = props;
    const [managerName, setManagerName] = useState("")
    const [managerPersonalCode, setManagerPersonalCode] = useState("")
    const history = useHistory();

    const newManager = () => {

        history.push('/NewManager')
    }

    const connectManager = () => {
        connectM({ name: managerName, password: managerPersonalCode })

        // if (userExist.userExist.name == null) {
        //     setErrorMessasge('שם משתמש וסיסמא לא נמצאו')
        // }
        // else
        //     setErrorMessasge('שם משתמש וסיסמא לא נמצאו')

    }
    return (
        <div className="d-flex justify-content-around" >
            <div id="existUser" class="d-flex flex-column m-auto justify-content-around align-items-center" >
                <h1 >Login</h1>
                <div class="textbox">
                    <img src={men} />
                    <input type="text" type placeholder="הקש שם" onChange={(e) => { setManagerName(e.target.value) }} />
                </div>
                <div class="textbox">
                    <img src={lock} />
                    <input type="password" placeholder="הקש סיסמא" onChange={(e) => { setManagerPersonalCode(e.target.value) }} />
                </div>
                <label for="connect" class="error-label" ></label>
                <button id="connect" type="submit" onClick={connectManager} class="btn-connect">התחבר</button>
                <div onClick={newManager}>מנהל חדש ? לחץ כאן</div>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userExist: state.userExist,

})

const mapDispatchToProps = dispatch => ({
    connectM: (data) => dispatch(actions.connectM(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginManager)