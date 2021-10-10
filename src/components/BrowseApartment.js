import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import history from '../config/history'
import { actions } from '../redux/actions/Action'


export const BrowseApartment = (props) => {
    const { apartments, additionToApartments, deleteApartmantNew } = props;
    const browseApartment = (apartment) => {
        // deleteApartmantNew()
        additionToApartments(apartment)

    }
    const [flag, setFlag] = useState(true)

    useEffect(() => {

    }, [flag]);

    return (

        <div>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>

            <div class="row row-wrapper">
                <div class="col-md-4 renter-list-wrapper">
                    {/* <button class="btn-add-item" onClick={addItem}>+</button> */}
                    <h3>עיון בבקשות להוספת דירות נופש :</h3>
                    {/* <h5>מנת לעדכן נתונים</h5> */}
                    <div class="row justify-content-start row-content-wrapper no-gutters">
                        <div class="renter-item-card " >
                            {apartments.apartmentsNew.length == 0 && <h5>!אין בקשות להוספת דירה</h5>}

                            {apartments.apartmentsNew.length > 0 && apartments.apartmentsNew.map((item) => {
                                return (
                                    <div class="row no-gutters" >
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title"><strong>{item.name}</strong></h6>
                                                <p class="card-text">{item.city} | {item.address}</p>
                                                <p class="card-text"> צימר {item.numRooms} חדרים מס' מיטות {item.numBeds} קומה  {item.floor}</p>
                                                <p class="card-text"> {item.defaultPrice} ₪</p>
                                                <button class="btn-add-item" onClick={() => { browseApartment(item) }}>אישור</button>

                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                            <div class="col-md-4 image-wrapper">
                                {/* <img id="cardImg" class="card-img" alt="..." /> */}
                                {/* [src]="renteritem.Images[0].data" */}
                            </div>
                        </div>
                    </div >
                </div >

            </div >
        </div>


    )
}

const mapStateToProps = (state) => ({
    apartments: state.apartments

})

const mapDispatchToProps = dispatch => ({
    deleteApartmantNew: (data) => dispatch(actions.deleteApartmantNew({ data })),

    additionToApartments: (data) => dispatch(actions.additionToApartments({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(BrowseApartment)
