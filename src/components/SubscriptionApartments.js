import React, {
    useEffect
} from 'react'
import { connect } from 'react-redux'
import history from '../config/history'
import { actions } from '../redux/actions/Action'
import { ImageApartment } from './ImageApartment'

export const SubscriptionApartments = (props) => {

    const { apartments, userExist } = props;
    const addItem = () => { }

    // useEffect(() => {
    // }, []);


    return (
        <div>
            {/* <button class="btn-back" onClick={() => history.goBack()}>אחורה</button> */}
            <div class="col-md-4 renter-list-wrapper">
                {/* <button class="btn-add-item" onClick={addItem}>+</button> */}
                {apartments.apartments.length > 0 && <h3>רשימת הצימרים להשכרה: ({apartments.apartments.length} תוצאות)</h3>}
                {apartments.apartments.length == 0 && <h3>!אין צימרים להשכרה</h3>}

                {/* <h5>לחץ על פריט על מנת לעדכן נתונים</h5> */}
                <div class="row justify-content-start row-content-wrapper no-gutters">
                    <div class="renter-item-card " >
                        {/* {apartments.apartments.length == 0 && <h3>!אין צימרים להשכרה</h3>} */}

                        {apartments.apartments.length > 0 && apartments.apartments.map((item) => {
                            return (
                                <div>

                                    {/* הצגת התמונות */}
                                    {/* <ImageApartment image={item.img}></ImageApartment> */}

                                    <div class="card-body">
                                        <h6 ><strong>{item.name}</strong></h6>
                                        <p >{item.city} | {item.address}</p>
                                        <p > צימר {item.numRooms} חדרים מס' מיטות {item.numBeds} קומה  {item.floor}</p>
                                        <p > {item.defaultPrice} ₪</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div class="col-md-4 image-wrapper">
                        </div>
                    </div>
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
