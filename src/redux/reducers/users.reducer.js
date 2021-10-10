import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = {
    users: [

    ]
}
const userReducer = {
    newUser(state, action) {
        state.users.push(action.payload)
    }

}


export default produce((state, action) => createReducer(state, action, userReducer), initialState);