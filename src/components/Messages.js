import React from 'react'
import { connect } from 'react-redux'
import history from '../config/history'
import { actions } from '../redux/actions/Action'

export const Messages = (props) => {
    const { apartments, deleteMessage, userExist } = props;
    const messageConfirmation = (apartment) => {
        deleteMessage({ name: userExist.userExist.name, password: userExist.userExist.password, apartment: apartment })

    }

    return (
        <div>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <div class="row row-wrapper">
                <div class="messsages-container">
                    <div>
                        <div>
                            <div class="my-messageText">צריך לשלוף הודעות</div>
                            {/* *ngIf="m.IsClient" */}
                            <div class="other-messageText">שנשלחו לבעל המנוי הזה</div>
                            {/* *ngIf="!m.IsClient" */}

                            {apartments.messages.length == 0 && <h5>!!!!!!!!אין הודעות</h5>}

                            {apartments.messages.length > 0 && apartments.messages.map((item) => {
                                return (
                                    <div class="row no-gutters" >
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title"><strong>!{item.nameUser} היקר</strong></h6>

                                                <h6 class="card-title"><strong>צימר בשם {item.name} באזור ה{item.area}</strong></h6>
                                                <p class="card-text">בעיר {item.city} בכתובת {item.address}</p>
                                                <p class="card-text"> צימר {item.numRooms} חדרים מס' מיטות {item.numBeds} קומה  {item.floor}</p>
                                                <p class="card-text"> מחיר ללילה ₪{item.defaultPrice} </p>
                                                <p class="card-text"> התווספה בהצלחה למאגר הדירות שלך</p>

                                                <button class="btn-back" onClick={() => { messageConfirmation(item) }}>אישור</button>

                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
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
    deleteMessage: (data) => dispatch(actions.deleteMessage({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
