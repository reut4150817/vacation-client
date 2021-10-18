import React from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageApartment = (props) => {
    const { images } = props;
    return (
        <div class="imgCarusel">
            <div className="carousel-wrapper">
                <Carousel
                    showStatus={false}
                    infiniteLoop={false}
                    emulateTouch
                    useKeyboardArrows
                    axis="vertical"
                    autoPlay>
                    <div className="slide-holder">
                        <img alt="" src={images} />
                        <p className="legend">Legend 1</p>
                    </div>
                    {/* {images.map((item) => {
                        return (
                            <div className="slide-holder">
                                <img alt="" src={item} />
                                <p className="legend">Legend 1</p>
                            </div>)
                    })} */}
                </Carousel>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ImageApartment)
