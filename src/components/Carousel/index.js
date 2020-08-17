import React, { useEffect, useRef } from 'react'
import M from "materialize-css"

export default function Carousel(props) {

    const Carousel = useRef()

    useEffect(() => {
        M.Carousel.init(Carousel.current, {});
    }, [])

  

    return (
        <div className="carousel" ref={Carousel}>
            <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
            <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
            <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
            <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" /></a>
            <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" /></a>
        </div>
    )


}