import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../config/history'
import like from '../assets/heart2.png'
import { actions } from '../redux/actions/Action'
import './criterionsUser.css'

export const criterionsUser = (props) => {
    const { apartments, userExist, saveNewItemLiked } = props;

    const markLoved = (item) => {
        const itemLike = {
            nameCurrentUser: userExist.userExist.name,
            passwordCurrentUser: userExist.userExist.password,
            nameUser: item.nameUser,
            passwordUser: item.passwordUser,
            telUser: item.telUser,
            area: item.area,
            name: item.name,
            city: item.city,
            address: item.address,
            floor: item.floor,
            numRooms: item.numRooms,
            numBeds: item.numBeds,
            regularWeekMidPrice: item.regularWeekMidPrice,
            regularWeekEndPrice: item.regularWeekEndPrice,
            seasonWeekMidPrice: item.seasonWeekMidPrice,
            seasonWeekEndPrice: item.seasonWeekEndPrice,
            defaultPrice: item.defaultPrice,
            extraPrice: item.extraPrice,
            remark: item.remark,
        }
        saveNewItemLiked(itemLike);
    }
    return (
        <>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <div class="divBigC" >
                {/* <button class="btn-add-item" onClick={addItem}>+</button> */}
                {/* <h3>רשימת הדירות נופש:</h3> */}
                {/* <h5>לחץ על פריט על מנת לעדכן נתונים</h5> */}
                <div class=" divBigCriterion">
                    <h3>רשימת הדירות נופש:</h3>

                    {apartments.allApartments.map((item) => {
                        return (
                            <div class="divCriterion" >
                                <img alt="" src={like} onClick={() => { markLoved(item) }} />

                                <h6 class="card-title"><strong>{item.name}</strong></h6>
                                <p class="card-text">{item.city} | {item.address}</p>
                                <p class="card-text"> צימר {item.numRooms} חדרים מס' מיטות {item.numBeds} קומה  {item.floor}</p>
                                <p class="card-text"> {item.defaultPrice} ₪</p>
                            </div>
                        )
                    })}
                    <div class="col-md-4 image-wrapper">
                        {/* <img id="cardImg" class="card-img" alt="..." /> */}
                        {/* [src]="renteritem.Images[0].data" */}
                    </div>
                </div >
            </div >
        </>
    )
}

const mapStateToProps = (state) => ({
    apartments: state.apartments,
    userExist: state.userExist

})

const mapDispatchToProps = dispatch => ({
    saveNewItemLiked: (data) => dispatch(actions.saveNewItemLiked({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(criterionsUser)
