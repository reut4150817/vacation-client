import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducers from './reducers/appReducers';
// import { extractJwt } from './middelware/crud'
import { saveNewUser, saveNewSubscriber, saveNewManager, getAllArea, saveNewItem, getAllUserApartment, getAllApartmentArea, getAllMessage, connectS, connectU, connectM, getManager, getAllApartmentNew, additionToApartments, deleteMessage, getAllApartment, getAllApartmentsLiked, saveNewItemLiked } from './middleWare/login.middleWare'
// import appMiddleware from './middlewares/appMiddleware'


const store = createStore(
    appReducers, composeWithDevTools(
        applyMiddleware(
            saveNewUser,
            saveNewSubscriber,
            saveNewManager,
            getAllArea,
            saveNewItem,
            getAllUserApartment,
            getAllApartmentArea,
            getAllMessage,
            connectS,
            connectU,
            connectM,
            getManager,
            getAllApartmentNew,
            additionToApartments,
            deleteMessage,
            getAllApartment,
            getAllApartmentsLiked,
            saveNewItemLiked
            // newUser
            // extractJwt,
            // getAllForms,
            // saveNewForm,
            // saveForm,
            // updateForm,
            // deleteForm,
            // copyForm,
            // createForm,
            // getForm

        ),
    )
)

// store.dispatch({ type: 'EXTRACT_JWT' });
window.store = store
export default store;


