import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = {
    subscribers: {
        subscribers: [],
        errorSubscriber: {},
        subscriber: {}

    },
    newSubscriber: {}

}
const subscriberReducer = {

    newSubscriber(state, action) {
        state.subscribers.subscribers.push(action.payload)
    },
    errorSubscription(state, action) {
        state.subscribers.errorSubscriber = action.payload
    },
    existingSubscription(state, action) {
        state.subscribers.subscriber = action.payload
    },
    setAllSubscriberNew(state, action) {
        state.newSubscriber = action.payload
    },

}


export default produce((state, action) => createReducer(state, action, subscriberReducer), initialState);