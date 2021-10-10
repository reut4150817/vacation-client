import React from 'react'
import history from '../config/history'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import './ManagerArea.css'
export const ManagerArea = (props) => {
    const { getAllApartmentNew } = props;

    const logout = () => { }
    const Messages = () => { }
    const BrowseApartment = () => {
        getAllApartmentNew()
        history.push('/BrowseApartment')
    }
    const viewOrders = () => { }
    const status = () => { }
    const myOrders = () => { }

    return (
        <div>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <button class="btn-back-2" onClick={logout}>התנתק</button>
            <div>
                <div class="row justify-content-center row-wrapper">
                    <button class="col-md-4 btn-renter-user" onClick={Messages}>עיון בבקשה לפתיחת מנוי</button>
                </div>
                <div class="row justify-content-center row-wrapper">
                    <button class="col-md-4 btn-renter-user" onClick={BrowseApartment}>עיון בבקשה להוספת דירה</button>
                </div >
                {/* <div class="row justify-content-center row-wrapper">
                    <button class="col-md-4 btn-subscriber-user" onClick={SubscriptionBoard}>צפיה בלוח הזמנות של הדירות</button>
                </div > */}




            </div >
        </div >

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    getAllApartmentNew: () => dispatch(actions.getAllApartmentNew()),

})

export default connect(mapStateToProps, mapDispatchToProps)(ManagerArea)

// יופיע כאשר מנהל רוצה לשלוח הודעה למישהו או שדירתו התווספה למערכת
// return (
//     <div>
//         <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
//         <div class="row row-wrapper">
//             <div class="messsages-container">
//                 <div>
//                     <div>
//                         {/* *ngFor="let m of messages" */}
//                         <div class="my-messageText">hhhh</div>
//                         {/* *ngIf="m.IsClient" */}
//                         <div class="other-messageText">hhhhhhh</div>
//                         {/* *ngIf="!m.IsClient" */}
//                     </div>
//                 </div >
//                 <div style={{ clear: "both", marginTop: "20px" }} >
//                     <div class="newMessages">
//                         <label for="messageText">שליחת הודעה</label>
//                         <textarea class="form-control" name="messageText" rows="5"></textarea>
//                         {/*  [(ngModel)]="messageText" */}
//                     </div>

//                     <button class="btn-click" Onclick={addMessage} > שלח</button >
//                 </div >
//             </div >
//         </div >
//     </div >
// )