import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/Action'
import history from '../config/history'
import { useHistory } from "react-router-dom";
import $ from "jquery";
import { dataURLtoFile } from '../utility/utility';


import './NewItem.css'

function NewItem(props) {
    const { getAllArea, details, saveNewItem, apartments, userExist, newImg, img } = props;
    const history = useHistory();

    const [itemArea, setItemArea] = useState("צפון")
    const [itenName, setItemName] = useState("")
    const [itemCity, setItemCity] = useState("אבו גוש")
    const [itemAddress, setItemAddress] = useState("")
    const [itemFloor, setItemFloor] = useState("")
    const [itemNumRooms, setItemNumRooms] = useState("")
    const [itemNumBeds, setItemNumBeds] = useState("")
    const [itemRegularWeekMidPrice, setItemRegularWeekMidPrice] = useState("")
    const [itemRegularWeekEndPrice, setItemRegularWeekEndPrice] = useState("")
    const [itemSeasonWeekMidPrice, setItemSeasonWeekMidPrice] = useState("")
    const [itemSeasonWeekEndPrice, setItemSeasonWeekEndPrice] = useState("")
    const [itemDefaultPrice, setItemDefaultPrice] = useState("")
    const [itemExtraPrice, setItemExtraPrice] = useState("")
    const [itemRemark, setItemRemark] = useState("")
    const [itemImg, setItemImg] = useState("")

    const [errorMessage, setErrorMessage] = useState("")

    // const readerLoaded = (e) => {
    //     const binaryString = e.target.result;
    //     const image = 'data:image/png;base64, ' + btoa(binaryString)
    //     newImg(image)
    // }

    const addItem = () => { }

    const fileSelectt = (e) => {
        // const file = e.target.files[0];
        // (image, `${formDetails.name}hello.png`
        const image = `${e.target.files[0].name},1.0`;

        var file = dataURLtoFile(image, `reut hello.png`);
        console.log('file', file);
        var fileToUpload = file;
        var myFile = new FormData();
        myFile.append("file", fileToUpload);

    }
    const qqqqq = (e) => {
        const file = e.target.files[0];
        setItemImg(e.target.files[0].name)
        // setItemImg(e.target.files[0])
        // setItemImg(e.target.files)
        // setItemImg(e.target.value)
        // if (files.length) {

        // var file = dataURLtoFile(files[0], `hello.png`);
        const reader = new FileReader();
        reader.onloadend = (e) => {
            console.log("reader.result", reader.result);
            console.log(e.target.result)

            var file = dataURLtoFile(e.target.result, `reut hello.png`);
            console.log('file', file);
            var fileToUpload = file;
            var myFile = new FormData();
            myFile.append("file", fileToUpload);
            newImg(myFile)

        }
        // var file = reader.readAsDataURL(e)
        // reader.readAsText(file);

        var imagee = reader.readAsDataURL(file);
        // console.log('imagee', imagee);

        // reader.onload = e => {
        // const binaryString = e.target.result;
        // const image = 'data:image/jpg;base64, ' + btoa(binaryString)
        // console.log("umage" + image);
        // 
        // console.log("binaryString" + binaryString);
        // newImg(file)
        // setItemImg(image)

        // console.log(e.target.result);
        // };


        // reader.onload = readerLoaded(e)

        // reader.onload = readerLoaded((e) => e.target)
    }
    // }


    const addSubscriberItem = () => {
        //בדיקות תקינות
        if (itenName === '') {
            setErrorMessage('חובה להזין שם')
        } else if (itemAddress === '') {
            setErrorMessage('חובה להזין כתובת')
        } else if (itemCity === 0) {
            setErrorMessage('חובה לבחור עיר')
        } else if (itemNumBeds === '') {
            setErrorMessage('חובה להזין מספר מיטות')
        } else if (itemNumBeds < 1 || itemNumBeds > 50) {
            setErrorMessage('מספר המיטות שהוזן לא תקין')
        } else if (itemFloor === '') {
            setErrorMessage('חובה להזין קומה')
        } else if (itemFloor < -10 || itemFloor > 50) {
            setErrorMessage('מספר הקומה שהוזן לא תקין')
            // } else if (this.newRenterItem.idCategory !== 3 && !Number(this.newRenterItem.mr)) {
            //   this.errorMessage = 'חובה להזין מ"ר';
            // } else if (this.newRenterItem.idCategory !== 3 && (this.newRenterItem.mr < 0 || this.newRenterItem.mr > 1000)) {
            //   this.errorMessage = 'מספר המ"ר שהוזן לא תקין';
        } else if (itemRemark === '') {
            setErrorMessage('חובה להזין הערות')
        } else if (itemNumRooms === '') {
            setErrorMessage('חובה להזין מספר חדרים')
        } else if (itemNumRooms < 1 || itemNumRooms > 30) {
            setErrorMessage('מספר החדרים שהוזן לא תקין')
        } else if (itemDefaultPrice === '') {
            setErrorMessage('חובה להזין מחיר')
        } else if (itemDefaultPrice < 50) {
            setErrorMessage('מחיר שהוזן לא תקין')
        } else if (itemRegularWeekMidPrice === '') {
            setErrorMessage('חובה להזין מחיר אמצע שבוע')
        } else if (itemRegularWeekMidPrice < 50) {
            setErrorMessage('מחיר אמצע שבוע שהוזן לא תקין')
        } else if (itemRegularWeekEndPrice === '') {
            setErrorMessage('חובה להזין מחיר סוף שבוע')
        } else if (itemRegularWeekEndPrice < 50) {
            setErrorMessage('מחיר סוף שבוע שהוזן לא תקין')
        } else if (itemSeasonWeekMidPrice === '') {
            setErrorMessage('חובה להזין מחיר אמצע שבוע בעונה')
        } else if (itemSeasonWeekMidPrice < 50) {
            setErrorMessage('מחיר אמצע שבוע בעונה שהוזן לא תקין')
        } else if (itemSeasonWeekEndPrice === '') {
            setErrorMessage('חובה להזין מחיר סוף שבוע בעונה')
        } else if (itemSeasonWeekEndPrice < 50) {
            setErrorMessage('מחיר סוף שבוע בעונה שהוזן לא תקין')
        } else if (itemExtraPrice === '') {
            setErrorMessage('חובה להזין תוספת מחיר למיטה')
        } else if (itemExtraPrice < 50) {
            setErrorMessage('תוספת מחיר למיטה שהוזן לא תקין')
        }
        // } else if (!this.newRenterItem.Images || this.newRenterItem.Images.length === 0) {
        // this.errorMessage = 'חובה להוסיף לפחות תמונה אחת';
        else {
            setErrorMessage('')
            const item = {
                nameUser: userExist.userExist.name,
                passwordUser: userExist.userExist.password,
                telUser: userExist.userExist.tel,
                area: itemArea,
                name: itenName,
                city: itemCity,
                address: itemAddress,
                floor: itemFloor,
                numRooms: itemNumRooms,
                numBeds: itemNumBeds,
                regularWeekMidPrice: itemRegularWeekMidPrice,
                regularWeekEndPrice: itemRegularWeekEndPrice,
                seasonWeekMidPrice: itemSeasonWeekMidPrice,
                seasonWeekEndPrice: itemSeasonWeekEndPrice,
                defaultPrice: itemDefaultPrice,
                extraPrice: itemExtraPrice,
                remark: itemRemark
            }
            saveNewItem(item);
        }

    }
    // useEffect(() => {
    //     // getAllArea()
    // }, []);


    return (

        <div>
            <button class="btn-back" onClick={() => history.goBack()}>אחורה</button>
            <div class="row new-item-row-wrapper">
                <div class="col-md-4 renter-list-wrapper">
                    {/* לבדוק מה עושה addItem */}
                    <button class="btn-add-item" onClick={addItem}>+</button>
                    <h3>רשימת הפריטים להשכרה:</h3>
                    <h5>לחץ על פריט על מנת לעדכן נתונים</h5>
                    <h3>הוספת דירה למאגר הדירות</h3>
                    <div class="row justify-content-start row-content-wrapper no-gutters">
                        <div class="renter-item-card " >
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-title"><strong>{itenName}</strong></h6>
                                    <p class="card-text">{itemCity} | {itemAddress}</p>
                                    <p class="card-text"> צימר {itemNumRooms} חדרים מס' מיטות {itemNumBeds}</p>
                                    <p class="card-text"> {itemDefaultPrice} ₪</p>
                                </div>
                                <div class="col-md-4 image-wrapper">
                                    {/* <img id="cardImg" [src]="renteritem.Images[0].data" class="card-img" alt="..."> */}
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div class="col-md-8">
                    <div class="new-item-wrapper row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="categorySubscriberItem">אזור</label>
                                <select class="form-control" name="categorySubscriberItem" onChange={(e) => { setItemArea(e.target.value) }} required>
                                    {details.area.map((item, i) => {
                                        return (
                                            <option value={item} >{item}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="nameSubscriberItem">שם הצימר</label>
                                <input type="text" class="form-control" name="nameSubscriberItem" onChange={(e) => { setItemName(e.target.value) }} required />
                            </div>
                            <div class="form-group">
                                <label for="citySubscriberItem">עיר</label>
                                <select class="form-control" name="citySubscriberItem" onChange={(e) => { setItemCity(e.target.value) }} required>
                                    {details.city.map((item) => {
                                        return (
                                            <option value={item} >{item}</option>
                                        )
                                    })
                                    }
                                </select >
                            </div >
                            {/* לא צריך */}
                            {/* < div class="form-group" >
                                    <label for="periodSubscriberItem">בחר תקופה</label>
                                    <select class="form-control" name="periodSubscriberItem" [(ngModel)] = "newSubscriberItem.idPeriod" required >
                                    <option  [ngValue] = "period.Id" * ngFor="let period of periods"[selected] = "period.Id ==newSubscriberItem.idPeriod" > {{ period.name }
                                    }</option >
                                    </select >
                                    </div > */}
                            <div class="form-group">
                                <label for="addressSubscriberItem">כתובת</label>
                                <input type="text" class="form-control" name="addressSubscriberItem" onChange={(e) => { setItemAddress(e.target.value) }} required />
                            </div>
                            < div class="form-group" >
                                <label for="floorSubscriberItem">קומה</label>
                                <input type="number" min={-10} max={50} class="form-control" name="floorSubscriberItem" onChange={(e) => { setItemFloor(e.target.value) }} required />
                            </div >
                            <div class="form-group">
                                <label for="numRoomsSubscriberItem">מספר חדרים</label>
                                <input type="number" min={1} max={30} class="form-control" name="numRoomsSubscriberItem" onChange={(e) => { setItemNumRooms(e.target.value) }} required />
                            </div>
                            {/* לא צריך */}
                            {/* < div class="form-group" * ngIf="newSubscriberItem.idCategory != 3" >
                                <label for="mrSubscriberItem">מ"ר</label>
                                <input type="number" class="form-control" name="mrSubscriberItem" [(ngModel)] = "newSubscriberItem.mr" required >
                            </div > */}
                            <div class="form-group">
                                <label for="bedsNumSubscriberItem">מספר מיטות</label>
                                <input type="number" min={1} max={50} class="form-control" name="bedsNumSubscriberItem" onChange={(e) => { setItemNumBeds(e.target.value) }} required />
                            </div>
                        </div >
                        <div class="col-md-4">
                            <h4 class="price-title">מחיר</h4>
                            <div class="form-group" >
                                <label for="regularMidweekPriceSubscriberItem">מחיר אמצע שבוע</label>
                                <input type="number" min={50} class="form-control" name="regularMidweekPriceSubscriberItem" onChange={(e) => { setItemRegularWeekMidPrice(e.target.value) }} required />
                            </div>
                            <div class="form-group" >
                                <label for="regularWeekendPriceSubscriberItem">מחיר סוף שבוע</label>
                                <input type="number" min={50} class="form-control" name="regularWeekendPriceSubscriberItem" onChange={(e) => { setItemRegularWeekEndPrice(e.target.value) }} required />
                            </div>
                            <div class="form-group" >
                                <label for="seasonMidweekPriceSubscriberItem"> מחיר אמצע שבוע בעונה</label>
                                <input type="number" min={50} class="form-control" name="seasonMidweekPriceSubscriberItem" onChange={(e) => { setItemSeasonWeekMidPrice(e.target.value) }} required />
                            </div>
                            <div class="form-group">
                                <label for="seasonWeekendPriceSubscriberItem"> מחיר סוף שבוע בעונה</label>
                                <input type="number" min={50} class="form-control" name="seasonWeekendPriceSubscriberItem" onChange={(e) => { setItemSeasonWeekEndPrice(e.target.value) }} required />
                            </div>
                            <div class="form-group">
                                <label for="defaultPriceSubscriberItem"> מחיר קבוע </label>
                                <input type="number" min={50} step="500" class="form-control" name="defaultPriceSubscriberItem" onChange={(e) => { setItemDefaultPrice(e.target.value) }} required />
                            </div>
                            <div class="form-group">
                                <label for="extraPriceSubscriberItem"> תוספת מחיר למיטה</label>
                                <input type="number" min={50} class="form-control" name="extraPriceSubscriberItem" onChange={(e) => { setItemExtraPrice(e.target.value) }} required />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="remarkSubscriberItem">הערות</label>
                                <textarea class="form-control" name="remarkSubscriberItem" rows="5" onChange={(e) => { setItemRemark(e.target.value) }} required></textarea>
                            </div>

                            <div class="form-group">
                                <label for="imagesSubscriberItem">הוספת תמונות  <small>עד 6 תמונות </small></label>
                                <input type="file" accept=".png, .jpg, .jpeg,.svg " name="file" id="filePicker" onChange={qqqqq} class="inputfile" multiple required />
                                <label for="filePicker">לחץ כאן להעלאת תמונות</label>
                                <img src={img.img[0]} />
                                {/* <img src={img.img[0].data} /> */}

                                <div class="img-wrapper">
                                    {/* <img *ngFor="let image of newSubscriberItem.Images" [src]="image.data"> */}
                                    {/* <img src={`data:image/jpeg;base64,${itemImg}`} /> */}
                                    {/* <img src={`data:image/jpeg;base64,{itemImg}`} /> */}
                                    <img src={itemImg} />


                                </div>
                                {/* אינטרנט */}
                                {/* <img src={file} className="add_grp_image"/> */}

                            </div>
                            <div class="left-bottom">
                                <label class="danger">{errorMessage}</label>
                                <button id="submit" type="submit" class="btn-submit" onClick={addSubscriberItem} >עדכן/הוסף</button>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}


const mapStateToProps = (state) => ({
    details: state.details,
    apartments: state.apartments,
    userExist: state.userExist,
    img: state.img,



})

const mapDispatchToProps = dispatch => ({
    saveNewItem: (data) => dispatch(actions.saveNewItem({ data })),
    getAllArea: () => dispatch(actions.getAllArea()),
    newImg: (data) => dispatch(actions.newImg({ data })),



})
export default connect(mapStateToProps, mapDispatchToProps)(NewItem)
