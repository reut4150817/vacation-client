import React, { useEffect } from 'react'
import history from '../config/history'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import './UserArea.css'
import CriterionsUser from './criterionsUser'
import {
    Link,
    Redirect
} from 'react-router-dom'
export const UserArea = (props) => {
    const { userExist, getAllApartment, getAllApartmentsLiked } = props;

    useEffect(() => {
        getAllApartment()
    }, []);

    const logout = () => { }
    const Messages = () => { }
    const criterions = () => {
        getAllApartment()
        history.push('/criterionsUser')

    }
    const viewOrders = () => { }
    const apartmentsLiked = () => {
        getAllApartmentsLiked({ name: userExist.userExist.name, password: userExist.userExist.password })

        history.push('/apartmentsLiked')

    }
    const myOrders = () => { }

    // const viewsubScriberItem = () => {
    //     history.push('/SubscriptionApartments')
    // }
    // const addNewRenterItem = () => {
    //     history.push('/NewItem')

    //     // <NewItem></NewItem>

    // }
    // const SubscriptionBoard = () => { }


    return (
        <div>
            {/* rgb(198 206 212); */}
            <div className="d-flex justify-content-start" style={{ backgroundColor: '#ff7100 ', height: '10vh' }}>
                <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
                <button class="btn-back-2" onClick={logout}>התנתק</button>
                <Link class="card-text  sss " to="/apartmentsLiked"> דירות שאהבתי</Link>
            </div>

            <CriterionsUser></CriterionsUser>

            <div class="row justify-content-center row-wrapper" id="firstChild">
                {/* <button class="col-md-4 btn-renter-user" onClick={criterions}> חיפוש ע"י קרטריונים</button> */}
                <button class="col-md-4 btn-renter-user" onClick={viewOrders}>עיון בהמלצות על דירה</button>

            </div >
            <div class="row justify-content-center row-wrapper">
                {/* <button class="col-md-4 btn-renter-user " onClick={apartmentsLiked} > עיון בדירות שאהבתי</button > */}

                {/* <button class="col-md-4 btn-renter-user" onClick={Messages}>הודעות</button> */}

            </div >
            {/* <div class="row justify-content-center row-wrapper">
                <button class="col-md-4 btn-renter-user" onClick={myOrders}>צפיה בהזמנות שלי</button>
            </div > */}

        </div >
    )
}

const mapStateToProps = (state) => ({
    userExist: state.userExist

})

const mapDispatchToProps = dispatch => ({
    getAllApartment: () => dispatch(actions.getAllApartment()),
    getAllApartmentsLiked: (data) => dispatch(actions.getAllApartmentsLiked({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(UserArea)


