import React from 'react'
import {
    Route,
    Switch,
    Router
} from 'react-router-dom'
import history from '../config/history'
import Home from '../components/Home'
import Login from '../components/Login'
import LoginUser from '../components/LoginUser'
import NewUser from '../components/NewUser'
import LoginSubscriber from '../components/LoginSubscriber'
import LoginManager from '../components/LoginManager'
import SubscriptionArea from '../components/SubscriptionArea'
import NewSubscriber from '../components/NewSubscriber'
import NewItem from '../components/NewItem'
import SubscriptionApartments from '../components/SubscriptionApartments'
import UserArea from '../components/UserArea'
import NewManager from '../components/NewManager'
import ManagerArea from '../components/ManagerArea'
import Messages from '../components/Messages'
import BrowseApartment from '../components/BrowseApartment'
import criterionsUser from '../components/criterionsUser'
import apartmentsLiked from '../components/apartmentsLiked'
import allApartmentArea from '../components/allApartmentArea'
const BASE_ADMIN_URL = "/"

export default function Routes(props) {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path="/llll">
                    <Home></Home>
                </Route>
                {/* <Route
                    path="/Login">
                    <Login></Login>
                </Route>
                <Route
                    path="/LoginUser">
                    <LoginUser></LoginUser>
                </Route> */}




                {/* exact */}
                {/* component={Home} */}
                {/* /> */}
                {/* <Route
                    path="/Login"
                    exact
                    component={Login}
                /> */}


                <Route
                    path="/"
                    exact
                    component={Home}
                />

                <Route
                    path="/login"
                    exact
                    component={Login}
                />

                <Route
                    path="/LoginUser"
                    exact
                    component={LoginUser}
                ></Route>

                <Route
                    path="/NewUser"
                    exact
                    component={NewUser}
                ></Route>
                <Route
                    path="/UserArea"
                    exact
                    component={UserArea}
                ></Route>

                <Route
                    path="/LoginManager"
                    exact
                    component={LoginManager}
                />
                <Route
                    path="/NewManager"
                    exact
                    component={NewManager}
                ></Route>
                <Route
                    path="/ManagerArea"
                    exact
                    component={ManagerArea}
                ></Route>

                <Route
                    path="/LoginSubscriber"
                    exact
                    component={LoginSubscriber}
                />
                <Route
                    // path={`/NewSubscriber/${BASE_ADMIN_URL}`}
                    path="/NewSubscriber"
                    exact
                    component={NewSubscriber}
                />

                <Route
                    path="/SubscriptionArea"
                    exact
                    component={SubscriptionArea}
                />

                {/* <Route path="/SubscriptionApartments:manager_code">
                    <SubscriptionApartments />
                </Route> */}
                <Route
                    path="/SubscriptionApartments"
                    exact
                    component={SubscriptionApartments}
                />
                <Route
                    path="/Messages"
                    exact
                    component={Messages}
                />
                <Route
                    path="/NewItem"
                    exact
                    component={NewItem}
                />
                <Route
                    path="/BrowseApartment"
                    exact
                    component={BrowseApartment}
                />
                <Route
                    path="/criterionsUser"
                    exact
                    component={criterionsUser}
                />
                <Route
                    path="/apartmentsLiked"
                    exact
                    component={apartmentsLiked}
                />
                <Route
                    path="/allApartmentArea"
                    exact
                    component={allApartmentArea}
                />
                {/* <ProtectedRoute {...props}>
                    <Route
                        exact
                        path={`${BASE_ADMIN_URL}/my-forms`}>
                        <Wrap >
                            <WrapAllForms />
                        </Wrap>
                    </Route>

                    <Route
                        exact
                        path={`${BASE_ADMIN_URL}/:formName`}>
                        <Wrap >
                            <WrapEditForm />
                        </Wrap>
                    </Route>
                </ProtectedRoute> */}

            </Switch>
        </Router >
    )
}

