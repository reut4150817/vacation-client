// import React, { useState } from 'react'
import React, { useState } from 'react'

import { connect } from 'react-redux'
import history from '../config/history'
import like from '../assets/heart2.png'
import { actions } from '../redux/actions/Action'
import './criterionsUser.css'

function CriterionsUser(props) {
    const { apartments, userExist, saveNewItemLiked, details, getApartmentsCriteria } = props;
    const [area, setArea] = useState("צפון")
    const [floor, setFloor] = useState("")
    const [numRooms, setNumRooms] = useState("")
    const [numBeds, setNumBeds] = useState("")
    const [regularWeekMidPrice, setRegularWeekMidPrice] = useState("")
    const [seasonWeekEndPrice, setSeasonWeekEndPrice] = useState("")
    // const [defaultPrice, setDefaultPrice] = useState("")
    const clearfilterList = () => { }
    const filterList = () => {
        const apartmentsCriteria = {
            area: area,
            floor: floor,
            numRooms: numRooms,
            numBeds: numBeds,
            regularWeekMidPrice: regularWeekMidPrice,
            seasonWeekEndPrice: seasonWeekEndPrice,
        }
        getApartmentsCriteria(apartmentsCriteria)

    }


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
            {/* <button class="btn-back" onClick={() => history.goBack()}>אחורה</button> */}
            <div class="divBigC" >
                {/* <button class="btn-add-item" onClick={addItem}>+</button> */}
                {/* <h3>רשימת הדירות נופש:</h3> */}
                {/* <h5>לחץ על פריט על מנת לעדכן נתונים</h5> */}
                <div class=" divBigCriterion">
                    <h3>רשימת הדירות נופש:</h3>
                    <h5> סינון לפי קרטריונים:</h5>



                    <div class="row justify-content-end">
                        <div class="col-md-3 filter-data"><span>אזור</span>
                            <select class="form-control" onChange={(e) => { setArea(e.target.value) }}>

                                {details.area.map((item, i) => {
                                    return (
                                        <option value={item} >{item}</option>
                                    )
                                })
                                }
                            </select>

                        </div >
                        <div class="col-md-3 filter-data filter-data-range">
                            <span>מחיר מ-</span>
                            <input type="number" class="form-control " onChange={(e) => { setRegularWeekMidPrice(e.target.value) }} />
                            {/* [(ngModel)]="customSearch.minPrice" */}


                        </div>
                        <div class="col-md-3 filter-data filter-data-range">

                            <span>עד-</span>
                            <input type="number" class="form-control" onChange={(e) => { setSeasonWeekEndPrice(e.target.value) }} />
                            {/* // [(ngModel)]="customSearch.maxPrice" */}

                        </div>

                        <div class="col-md-3 filter-data small-filter-data" ><span>מס' מיטות</span>
                            <input type="number" class="form-control" onChange={(e) => { setNumBeds(e.target.value) }} />
                            {/* [(ngModel)]="customSearch.numPeople" */}
                        </div>
                        <div class="col-md-3 filter-data small-filter-data"><span>מס' חדרים</span>
                            <input type="number" class="form-control" onChange={(e) => { setNumRooms(e.target.value) }} />
                            {/* [(ngModel)]="customSearch.numRooms" */}
                        </div>

                        {/* <div class="col-md-3 filter-data"><span>כתובת</span>
                            <input type="text" class="form-control" />
                            [(ngModel)]="customSearch.address"
                        </div> */}

                        <div class="col-md-3 filter-data small-filter-data" ><span>קומה</span>
                            <input type="number" class="form-control" onChange={(e) => { setFloor(e.target.value) }} />
                            {/* [(ngModel)]="customSearch.floor" */}
                        </div>


                        {/* <div class="col-md-3 filter-data" ><span>שם</span>
                            <input type="text" class="form-control" />
                            [(ngModel)] = "customSearch.name"
                        </div > */}

                    </div >
                    <div class="row justify-content-end">
                        <button Onclick={clearfilterList} class="btn-cancel-filter">בטל</button>
                        <button Onclick={filterList} class="btn-filter" > סנן</button >
                    </div >


                    {
                        apartments.allApartments.map((item) => {
                            return (
                                <div class="divCriterion" >
                                    <img alt="" src={like} onClick={() => { markLoved(item) }} />

                                    <h6 class="card-title"><strong>{item.name}</strong></h6>
                                    <p class="card-text">{item.city} | {item.address}</p>
                                    <p class="card-text"> צימר {item.numRooms} חדרים מס' מיטות {item.numBeds} קומה  {item.floor}</p>
                                    <p class="card-text"> {item.defaultPrice} ₪</p>
                                </div>
                            )
                        })
                    }
                    < div class="col-md-4 image-wrapper" >
                        {/* <img id="cardImg" class="card-img" alt="..." /> */}
                        {/* [src]="renteritem.Images[0].data" */}
                    </div >
                </div >
            </div >
        </>
    )
}

const mapStateToProps = (state) => ({
    apartments: state.apartments,
    userExist: state.userExist,
    details: state.details,
})

const mapDispatchToProps = dispatch => ({
    saveNewItemLiked: (data) => dispatch(actions.saveNewItemLiked({ data })),
    getApartmentsCriteria: (data) => dispatch(actions.getApartmentsCriteria({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(CriterionsUser)
