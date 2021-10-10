import React from 'react'
import history from '../config/history'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import './UserArea.css'

export const UserArea = (props) => {
    const { userExist, getAllApartment, getAllApartmentsLiked } = props;

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
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <button class="btn-back-2" onClick={logout}>התנתק</button>



            <div class="row justify-content-center row-wrapper" id="firstChild">
                <button class="col-md-4 btn-renter-user" onClick={criterions}> חיפוש ע"י קרטריונים</button>
                <button class="col-md-4 btn-renter-user" onClick={viewOrders}>עיון בהמלצות על דירה</button>

            </div >
            <div class="row justify-content-center row-wrapper">
                <button class="col-md-4 btn-renter-user" onClick={apartmentsLiked} > עיון בדירות שאהבתי</button >
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


