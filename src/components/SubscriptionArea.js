import React from 'react'
import history from '../config/history'
import './SubscriptionArea.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'


export const SubscriptionArea = (props) => {

    const { userExist, getAllUserApartment, getAllMessage } = props;
    // const name = document.URL.split(":")[3]

    const logout = () => { }
    const viewsubScriberItem = () => {
        getAllUserApartment({ name: userExist.userExist.name, password: userExist.userExist.password })
        history.push('/SubscriptionApartments')
    }
    const addNewItem = () => {
        history.push('/NewItem')

        // <NewItem></NewItem>

    }
    const SubscriptionBoard = () => { }
    const SubscriptionMessage = () => {
        getAllMessage({ name: userExist.userExist.name, password: userExist.userExist.password })
        history.push('/Messages')

    }


    return (
        <div>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <button class="btn-back-2" onClick={logout}>התנתק</button>
            {/* <div class="row justify-content-center row-wrapper">

                <Link to={`/SubscriptionApartments:${userExist.userExist.name}`} class="col-md-4 btn-subscriber-user">
                    צפיה בדירות שפרסמתי
                </Link>
            </div> */}

            <div class="row justify-content-center row-wrapper">
                <button class="col-md-4 btn-subscriber-user" onClick={viewsubScriberItem}>צפיה בדירות שפרסמתי</button>
            </div>
            <div class="row justify-content-center row-wrapper">
                <button class="col-md-4 btn-subscriber-user" onClick={addNewItem}>בקשה לפרסום דירה </button>
            </div >
            <div class="row justify-content-center row-wrapper">
                <button class="col-md-4 btn-subscriber-user" onClick={SubscriptionBoard}>צפיה בלוח הזמנות של הדירות</button>
            </div >
            <div class="row justify-content-center row-wrapper">
                <button class="col-md-4 btn-subscriber-user" onClick={SubscriptionMessage}>צפיה בהודעות שנשלחו</button>
            </div >
        </div >
    )
}

const mapStateToProps = (state) => ({
    userExist: state.userExist

})

const mapDispatchToProps = dispatch => ({
    getAllUserApartment: (data) => dispatch(actions.getAllUserApartment({ data })),
    getAllMessage: (data) => dispatch(actions.getAllMessage({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionArea)
