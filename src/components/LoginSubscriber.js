import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
// import NewSubscriber from './NewSubscriber'
import history from '../config/history'
import men from '../assets/men.png'
import lock from '../assets/lock.png'


function LoginSubscriber(props) {
    const { connectS, subscribers } = props;
    const [subscriberName, setSubscriberName] = useState("")
    const [subscriberPersonalCode, setSubscriberPersonalCode] = useState("")
    const [flag, setFlag] = useState(false)


    const newSubscriber = () => {
        history.push('/NewSubscriber')
    }
    const connectSubscribe = () => {

        connectS({ name: subscriberName, password: subscriberPersonalCode })
        // history.push(`/NewSubscriber`)
        // history.push(`/NewSubscriber/${subscriberName}`)


        // if (subscribers.subscribers == 'null')
        // alert('hsd')

    }
    return (
        <div className="d-flex justify-content-around" >
            <div id="existUser" class="d-flex flex-column m-auto justify-content-around align-items-center" >
                <h1 >Login</h1>
                <div class="textbox">
                    <img src={men} />
                    <input type="text" type placeholder="הקש שם" onChange={(e) => { setSubscriberName(e.target.value) }} />
                </div>
                <div class="textbox">
                    <img src={lock} />
                    <input type="password" placeholder="הקש סיסמא" onChange={(e) => { setSubscriberPersonalCode(e.target.value) }} />
                </div>
                <label for="connect" class="error-label" ></label>
                {/* *ngIf="errorMessasge">{{ errorMessasge }} */}
                <button id="connect" type="submit" onClick={
                    connectSubscribe
                    // (e) => { history.push('/SubscriptionArea')}
                } class="btn-connect">התחבר</button>
                <div onClick={newSubscriber}> מנוי חדש ? לחץ כאן</div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    subscribers: state.subscribers
})

const mapDispatchToProps = dispatch => ({
    connectS: (data) => dispatch(actions.connectS(data)),

})


export default connect(mapStateToProps, mapDispatchToProps)(LoginSubscriber)