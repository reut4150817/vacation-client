import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = {
    apartments: [

    ],
    apartmentsArea: [],
    apartmentsNew: [
    ],
    messages: [],
    allApartments: [],
    apartmentsLiked: []

}
const apartmantReducer = {

    newApartment(state, action) {
        state.apartments.push(action.payload)
    },

    setAllUserApartmant(state, action) {
        state.apartments = action.payload
    },

    setAllApartmentArea(state, action) {
        state.apartmentsArea = action.payload
    },

    setAllApartmantNew(state, action) {
        state.apartmentsNew = action.payload
    },
    setAllMessages(state, action) {
        state.messages = action.payload
    },
    deleteApartmantNew(state, action) {
        state.apartmentsNew = null
    },
    setAllApartmant(state, action) {
        state.allApartments = action.payload
    },
    setAllApartmentsLiked(state, action) {
        state.apartmentsLiked = action.payload
    },

}


export default produce((state, action) => createReducer(state, action, apartmantReducer), initialState);