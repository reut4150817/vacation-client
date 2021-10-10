import { combineReducers } from 'redux';
import details from './apartmentDetails.reducer';
import apartments from './apartment.reducer'
import subscribers from './subscriber.reducer';
import userExist from './userExist.reducer';
import img from './img.reducer';
import users from './users.reducer';
import manager from './managers.reducers';

// import fieldsReducer from './fields.reducer';
// import formDetailsReducer from './formDetails.reducer';
// import configurator from './configurator.reducers'
// import fieldsType from './fieldsType.reducer'
// import userReducer from './user.reducer'
// import formsReducer from './forms.reducer'
// import { reducer as formReducer } from 'redux-form';
// import modalReducer from './modal.reducer';
// Combine with other reducers we may add in the future
const appReducers = combineReducers({
    details: details,
    apartments: apartments,
    subscribers: subscribers,
    userExist: userExist,
    img: img,
    users: users,
    manager: manager,
    //   frame: frameReducer,
    //   form: formReducer,
    //   formDetails: formDetailsReducer,
    //   fields: fieldsReducer,
    //   configurator: configurator,
    //   fieldsType: fieldsType,
    //   user: userReducer,
    //   modal:modalReducer

});

export default appReducers;