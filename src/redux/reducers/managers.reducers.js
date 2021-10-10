import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = {
    managers: [

    ]
}
const managerReducer = {
    newManager(state, action) {
        state.managers.push(action.payload)
    },
    currentManager(state, action) {
        state.managers = action.payload
    }

}


export default produce((state, action) => createReducer(state, action, managerReducer), initialState);