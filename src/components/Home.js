import React from 'react'
import ReactDOM from 'react-dom';
import './Home.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import {
    Link,
    Redirect
} from 'react-router-dom'
import history from '../config/history'
import { actions } from '../redux/actions/Action'
import { connect } from 'react-redux'
import www from '../assets/men.png'
import xxx from '../assets/u4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

function Home(props) {
    const { getManager, getAllApartmentArea } = props;

    const privateArea = () => {
        getManager()
        history.push('/login')
    }

    //הצגת התמונות
    const slider = (
        <AwesomeSlider animation="cubeAnimation">
            {/* <div data-src=".././assets/me" /> */}
            <div data-src="www" />
            <div data-src="/path/to/image-2.jpg" />
        </AwesomeSlider>
    );

    const AllNorth = () => {
        getAllApartmentArea({ area: 'צפון' })
        history.push('/allApartmentArea')



        // <img src={www} />
        // <img style={{ width: "100%" }} src={www} />
        // <img style={{ width: "100%", height: "90%" }} src="../assets/u4.jpg " />


        // <AwesomeSlider animation="cubeAnimation">
        //     <img src={www} />
        //     {/* <div [data-src]=www /> */}
        //     {/* <div data-src="/path/to/image-0.png" /> */}
        //     <div data-src="/path/to/image-1.png" />
        //     <div data-src="/path/to/image-2.jpg" />
        // </AwesomeSlider>

    }
    const AllSouth = () => {
        getAllApartmentArea({ area: 'דרום' })
        history.push('/allApartmentArea')
    }
    const AllMercaz = () => {
        getAllApartmentArea({ area: 'מרכז' })
        history.push('/allApartmentArea')
    }
    return (
        <div>
            {/* <Link class="btn" to="/Login">לאזור האישי</Link> */}
            <input id="privateArea" type="button" value="לאזור האישי"
                onClick={() => { privateArea() }} />
            <br></br>

            <div dir="rtl" className="d-flex align-items-start justify-content-around">
                <div class="link" >
                    <h2 class="sub-title" onClick={() => { AllNorth() }}>צפון</h2>
                    {/* <img style={{ width: "100%" }} src={www} /> */}
                    <div className="carousel-wrapper">
                        <Carousel
                            showStatus={false}
                            // infiniteLoop={false}
                            emulateTouch
                            useKeyboardArrows
                            axis="vertical"
                            autoPlay>
                            <div className="slide-holder">
                                <img alt="" src={www} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div className="slide-holder">
                                <img alt="" src={www} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div className="slide-holder">
                                <img alt="" src={xxx} />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>

                </div>
                <div class="link">
                    <h2 class="sub-title" onClick={() => { AllSouth() }}>דרום</h2>
                    <div className="carousel-wrapper">
                        <Carousel
                            showStatus={false}
                            infiniteLoop={false}
                            emulateTouch
                            useKeyboardArrows
                            axis="vertical"
                            autoPlay>
                            <div className="slide-holder">
                                <img alt="" src={www} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div className="slide-holder">
                                <img alt="" src={www} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div className="slide-holder">
                                <img alt="" src={xxx} />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>

                </div>
                <div class="link">
                    <h2 class="sub-title" onClick={() => { AllMercaz() }}> מרכז</h2>
                    <div className="carousel-wrapper">
                        <Carousel
                            // showThumbs={true}
                            showStatus={false}
                            // howArrows={true}
                            infiniteLoop={false}
                            emulateTouch
                            useKeyboardArrows
                            // transitionTime={1000}
                            axis="vertical"
                            // שזתמונות יבואו מלמטה ולא מהצד
                            autoPlay>
                            <div className="slide-holder">
                                <img alt="" src={www} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div className="slide-holder">
                                <img alt="" src={www} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div className="slide-holder">
                                <img alt="" src={xxx} />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </div>

                </div >
            </div >
        </div >
    )
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getManager: () => dispatch(actions.getManager({})),
    getAllApartmentArea: (data) => dispatch(actions.getAllApartmentArea({ data })),

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
