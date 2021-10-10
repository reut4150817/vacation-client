import React from 'react'
import { connect } from 'react-redux'
import history from '../config/history'
import {
    Link,
    Route,
    Switch,
    Router
} from 'react-router-dom'
export const apartmentsLiked = (props) => {
    const { apartments, userExist } = props;

    return (
        <>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <div class="divBigC" >
                {/* <button class="btn-add-item" onClick={addItem}>+</button> */}
                {/* <h3>רשימת הדירות נופש:</h3> */}
                {/* <h5>לחץ על פריט על מנת לעדכן נתונים</h5> */}
                <div class=" divBigCriterion">
                    <h3>הצימרים שאהבתי ({apartments.apartmentsLiked.length}תוצאות)</h3>

                    {apartments.apartmentsLiked.map((item) => {
                        return (
                            <div class="divCriterion" >
                                {/* <img alt="" src={like} onClick={() => { markLoved(item) }} /> */}

                                <h6 class="card-title"><strong>{item.name}</strong></h6>
                                <p class="card-text">מיקום:{item.city} | {item.address}</p>
                                <p class="card-text">מקסימום מיטות ביחידה: {item.numBeds} </p>
                                <p class="card-text">מספר חדרים ביחידה: {item.numRooms}</p>
                                <p class="card-text">  קומה :  {item.floor}</p>
                                {/* <p class="card-text"> צימר {item.numRooms} חדרים מס' מיטות {item.numBeds} קומה  {item.floor}</p> */}
                                <p class="card-text">  טלפון :  {item.telUser}</p>
                                <p class="card-text">מחיר: {item.defaultPrice} ₪</p>
                                <a>hhhhhh</a>
                                <Link to="llll">   <p class="card-text">  טלפון :  {item.telUser}</p> </Link>
                                <p class="card-text">תוספת למיטה: {item.extraPrice} ₪</p>

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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(apartmentsLiked)
