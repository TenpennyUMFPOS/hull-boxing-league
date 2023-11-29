// HullCarousel.js
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carouselImage';
import HDIA from '../../../assets/carousel/HDIA.png';
import LF from '../../../assets/carousel/L&F.png';
import Clothing from '../../../assets/carousel/Clothing.png';
import Tickets from '../../../assets/carousel/Tickets.png';
import Bets from '../../../assets/carousel/Bets.png';
const startNowImages = [
    { id: 1, src: HDIA },
    { id: 2, src: LF },
    { id: 3, src: Clothing },
    { id: 4, src: Tickets },
    { id: 5, src: Bets }
]

function HullCarousel() {
    const carouselItems = startNowImages.map((sni) => (
        <Carousel.Item key={sni.id}>
            <CarouselImage text="First slide" imageUrl={sni.src} />
        </Carousel.Item>
    ))
    const [CIndex, CSetIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        CSetIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={CIndex} onSelect={handleSelect}>
            {carouselItems}
        </Carousel>
    );
}

export default HullCarousel;
