import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = {
    img: [
    ]
}
const imgReducer = {

    newImg(state, action) {
        state.img.push(action.payload)
    }

}


export default produce((state, action) => createReducer(state, action, imgReducer), initialState);