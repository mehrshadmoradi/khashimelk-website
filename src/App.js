import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Slider from "react-slick";
import images from './images.js';

function App(props) {


    const settings = {
        Infinite: true,
        dots: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '50px',
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="sliser-container">
            <Slider {...settings} className='slider'>
                {images.map(
                    (image, index) => (
                        <div className='innerDiv-carousel' key={index}>
                            <ul className='list'>
                                <li>
                                    <figure className='figure'>
                                        <a href={image.href} target="_blank">
                                            <img src={image.img} alt={image.alt} className='image' />
                                            <figcaption className='figCaption'>{image.caption}</figcaption>
                                        </a>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    )
                )}
            </Slider>
        </div>
    )
}
export default App