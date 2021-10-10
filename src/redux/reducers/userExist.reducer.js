import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = {
    userExist: {
        name: {},
        password: {}
    }
}
const userExistReducer = {
    updateUser(state, action) {
        state.userExist.name = action.payload.name
        state.userExist.password = action.payload.password
        state.userExist.tel = action.payload.tel

    }

}


export default produce((state, action) => createReducer(state, action, userExistReducer), initialState);