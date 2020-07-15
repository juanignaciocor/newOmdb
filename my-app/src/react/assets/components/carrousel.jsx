import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./index.css"


export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                interval={6000}
                playDirection={"forward"}
                isPlaying={true}

            >

                <Slider className="sliders">
                    <Slide index={0}><img className="imagenSilde" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUPQ_YrYl0hehZffxSUw6ashj9WMgP-gtM8Q&usqp=CAU" /> </Slide>
                    <Slide index={1}><img className="imagenSilde" src="https://pbs.twimg.com/media/Dy6tRGrUYAACf6p.jpg" /> </Slide>
                    <Slide index={2}> <img className="imagenSilde" src="https://i.imgur.com/OdMte8m.jpg" /> </Slide>
                </Slider>

            </CarouselProvider>
        );
    }
}


