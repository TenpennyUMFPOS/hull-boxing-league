
function CarouselImage({ text, imageUrl }) {
    return (
        <img style={{ width: '100%' }} src={imageUrl} alt={text} />
    );
}


export default CarouselImage;