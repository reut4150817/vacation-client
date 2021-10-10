import React, {
    useEffect
} from 'react'
import { connect } from 'react-redux'
import history from '../config/history'
import { actions } from '../redux/actions/Action'

export const SubscriptionApartments = (props) => {

    const { apartments, userExist } = props;
    const addItem = () => { }

    // useEffect(() => {
    // }, []);


    return (
        <div>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <div class="row row-wrapper">
                <div class="col-md-4 renter-list-wrapper">
                    <button class="btn-add-item" onClick={addItem}>+</button>
                    <h3>רשימת הפריטים להשכרה:</h3>
                    <h5>לחץ על פריט על מנת לעדכן נתונים</h5>
                    <div class="row justify-content-start row-content-wrapper no-gutters">
                        <div class="renter-item-card " >
                            {apartments.apartments.map((item) => {
                                return (
                                    <div class="row no-gutters" >
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title"><strong>{item.name}</strong></h6>
                                                <p class="card-text">{item.city} | {item.address}</p>
                                                <p class="card-text"> צימר {item.numRooms} חדרים מס' מיטות {item.numBeds} קומה  {item.floor}</p>
                                                <p class="card-text"> {item.defaultPrice} ₪</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div class="col-md-4 image-wrapper">
                                <img id="cardImg" class="card-img" alt="..." />
                                {/* [src]="renteritem.Images[0].data" */}
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}

const mapStateToProps = (state) => ({
    apartments: state.apartments,
    userExist: state.userExist

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionApartments)
