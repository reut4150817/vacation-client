import Http from '../../config/axios'
import { actions } from '../actions/Action'
import history from '../../config/history'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'


export const saveNewUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SAVE_NEW_USER') {
        dispatch(actions.newUser({ user: action.payload.data }))
        Http.post(`/saveNewUser`, action.payload.data)
            .then(res => {
                console.log(res.data);
                // dispatch(actions.pushManagerToManagers(user));
                // dispatch(actions.setIsLoading(false));
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setIsLoading(false));
            });
    } return next(action);
}

export const saveNewSubscriber = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SAVE_NEW_SUBSCRIBER') {
        dispatch(actions.newSubscriber({ subscriber: action.payload.data }))
        Http.post(`/saveNewSubscriber`, action.payload.data)
            .then(res => {
                console.log(res.data);
                // dispatch(actions.pushManagerToManagers(user));
                // dispatch(actions.setIsLoading(false));
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setIsLoading(false));
            });
    } return next(action);

}



export const saveNewManager = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SAVE_NEW_MANAGER') {
        dispatch(actions.newManager({ manager: action.payload.data }))
        Http.post(`/saveNewManager`, action.payload.data)
            .then(res => {
                console.log(res.data);
                // dispatch(actions.setIsLoading(false));
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setIsLoading(false));
            });
    } return next(action);
}

export const saveNewItem = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SAVE_NEW_ITEM') {
        dispatch(actions.newApartment({ apartment: action.payload.data }))
        Http.post(`/saveNewItem`, action.payload.data)
            .then(res => {
                console.log(res.data);
                // dispatch(actions.setIsLoading(false));
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setIsLoading(false));
            });
    } return next(action);
}

export const getAllArea = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_AREA') {
        console.log('get all area');
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getAllArea`)
            .then(res => {
                console.log("all", res);
                dispatch(actions.setAllarea(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};



export const connectS = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CONNECT_S') {
        // console.log('get form');
        Http.get(`/connectS/${action.payload.name}/${action.payload.password}`)
            .then(res => {
                if (res.data == null) {
                    console.log("sucssfuly", res);
                    dispatch(actions.errorSubscription(res.data))
                    history.push("/NewSubscriber")
                }
                else {
                    dispatch(actions.existingSubscription(res.data))
                    dispatch(actions.updateUser({ name: res.data.LastName, password: res.data.password, tel: res.data.tel }))
                    // history.push(`/SubscriptionArea:${res.data.LastName}`)
                    history.push("/SubscriptionArea")
                }
            })
            .catch(error => {
                console.log(error)
            });
        return;
    }
    return next(action);
}


export const connectU = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CONNECT_U') {
        // console.log('get form');
        Http.get(`/connectU/${action.payload.name}/${action.payload.password}`)
            .then(res => {
                if (res.data == null) {
                    console.log("sucssfuly", res);
                    // <Redirect to="/NewUser" />
                    // dispatch(actions.errorSubscription(res.data))
                    // history.push("/NewUser")
                }
                else {
                    // dispatch(actions.existingSubscription(res.data))
                    dispatch(actions.updateUser({ name: res.data.LastName, password: res.data.password }))
                    // history.push(`/SubscriptionArea:${res.data.LastName}`)
                    history.push("/UserArea")
                }
            })
            .catch(error => {
                console.log(error)
            });
        return;
    }
    return next(action);
}


export const connectM = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CONNECT_M') {
        Http.get(`/connectM/${action.payload.name}/${action.payload.password}`)
            .then(res => {
                if (res.data == null) {
                    console.log("sucssfuly", res);
                    // dispatch(actions.errorSubscription(res.data))
                    // history.push("/NewUser")
                }
                else {
                    // dispatch(actions.existingSubscription(res.data))
                    dispatch(actions.updateUser({
                        name: res.data.userName
                        , password: res.data.password
                    }))
                    // dispatch(actions.currentManager({ manager: res.data }))

                    // history.push(`/SubscriptionArea:${res.data.LastName}`)
                    history.push("/ManagerArea")
                }
            })
            .catch(error => {
                console.log(error)
            });
        return;
    }
    return next(action);
}

// export const saveNewForm = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'SAVE_NEW_FORM') {
//         const form = {
//             name: getState().formDetails.name,
//             style: getState().formDetails.style,
//             fields: getState().fields.fields,
//         }
//         dispatch(actions.createForm({ form: form }));
//     }
//     return next(action);
// }


export const getAllUserApartment = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_USER_APARTMENT') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getAllUserApartment/${action.payload.data.name}/${action.payload.data.password}`)
            .then(res => {
                console.log("all", res);
                dispatch(actions.setAllUserApartmant(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};

export const getAllApartmentArea = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_APARTMENT_AREA') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getAllApartmentArea/${action.payload.data.area}`)
            .then(res => {
                console.log("all", res);
                dispatch(actions.setAllApartmentArea(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};

export const getAllMessage = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_MESSAGE') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getAllMessage/${action.payload.data.name}/${action.payload.data.password}`)
            .then(res => {
                console.log("all", res);
                dispatch(actions.setAllMessages(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};

export const getAllApartmentNew = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_APARTMENT_NEW') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getAllApartmentNew`)
            .then(res => {
                dispatch(actions.setAllApartmantNew(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};


export const additionToApartments = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADDITION_TO_APARTMENTS') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.post(`/additionToApartments`, action.payload.data)
            .then(res => {
                dispatch(actions.setAllApartmantNew(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};

export const deleteMessage = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_MESSAGE') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.post(`/deleteMessage/${action.payload.data.name}/${action.payload.data.password}`, action.payload.data.apartment)
            .then(res => {
                dispatch(actions.setAllMessages(res.data))

                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};

export const getManager = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_MANAGER') {
        console.log('get all manager');
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getManager`)
            .then(res => {
                console.log("all", res);
                dispatch(actions.currentManager({ manager: res.data }))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};


export const getAllApartment = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_APARTMENT') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getAllApartment`)
            .then(res => {
                dispatch(actions.setAllApartmant(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};
export const getAllApartmentsLiked = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_APARTMENTS_LIKED') {
        // dispatch(actions.setFrame({ key: 'isLoading', value: true }))
        Http.get(`/getAllApartmentsLiked/${action.payload.data.name}/${action.payload.data.password}`)
            .then(res => {
                console.log("all", res);
                dispatch(actions.setAllApartmentsLiked(res.data))
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setFrame({ key: 'isLoading', value: false }))
            });
        return;
    }
    return next(action);
};

export const saveNewItemLiked = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SAVE_NEW_ITEM_LIKED') {
        Http.post(`/saveNewItemLiked`, action.payload.data)
            .then(res => {
                console.log(res.data);
                // dispatch(actions.setIsLoading(false));
            })
            .catch(error => {
                console.log(error)
                // dispatch(actions.setIsLoading(false));
            });
    } return next(action);
}