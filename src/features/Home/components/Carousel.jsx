import { useState } from "react"
import "../style/carousel.scss"

const Carousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalSlides = data.length

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    return (
        <div className="carousel-wrapper">
            <div className="carousel-inner">
                {data.map((slide, idx) => (
                    <div key={idx} className={`carousel-slide ${idx === currentIndex ? "active" : ""}`}>
                        <img className="carousel-image" src={slide.src} alt={slide.alt} />
                    </div>
                ))}
                <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous slide">
                    &#8249;
                </button>
                <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next slide">
                    &#8250;
                </button>
            </div>
            <div className="carousel-dots">
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel