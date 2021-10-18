import React from 'react'
import { connect } from 'react-redux'
import history from '../config/history'
import { actions } from '../redux/actions/Action'

export const BrowseSubscriber = (props) => {
    const { subscribers, additionToSubscribers } = props;
    const browseSubscriber = (subscriber) => {
        // deleteApartmantNew()
        additionToSubscribers(subscriber)

    }
    return (
        <div>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <div class=" renter-list-wrapper">
                {subscribers.newSubscriber.length > 0 && <h3>רשימת הבקשות לפתיחת מנוי: ({subscribers.newSubscriber.length} תוצאות)</h3>}
                {subscribers.newSubscriber.length == 0 && <h3>!אין בקשות לפתיחת מנוי</h3>}
                {/* <h3>עיון בבקשות לפתיחת מנוי :</h3> */}
                <div class="row justify-content-start row-content-wrapper no-gutters">
                    <div class="renter-item-card " >
                        {/* {subscribers.newSubscriber.length == 0 && <h5>!אין בקשות לפתיחת מנוי</h5>} */}

                        {subscribers.newSubscriber.length > 0 && subscribers.newSubscriber.map((subscriber) => {
                            return (
                                <div class="row no-gutters" >
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h6 class="card-title"><strong> פרטי בעל החשבון:</strong></h6>
                                            <h6 class="card-title"> שם פרטי: {subscriber.LastName}</h6>
                                            <p class="card-text"> סיסמא: {subscriber.password}</p>
                                            <p class="card-text"> מייל: {subscriber.email}</p>
                                            <p class="card-text"> מספר חשבון: {subscriber.accountNum} </p>
                                            <p class="card-text"> מספר בנק: {subscriber.bank}</p>
                                            <p class="card-text"> מספר סניף: {subscriber.snif}</p>
                                            <p class="card-text"> מספר טלפון:{subscriber.tel} </p>
                                            <button class="btn-add-subscriber" onClick={() => { browseSubscriber(subscriber) }}>אישור</button>

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
        </div>


    )
}

const mapStateToProps = (state) => ({
    subscribers: state.subscribers

})

const mapDispatchToProps = dispatch => ({
    additionToSubscribers: (data) => dispatch(actions.additionToSubscribers({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(BrowseSubscriber)
