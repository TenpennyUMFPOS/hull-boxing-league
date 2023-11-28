import React, { useRef, useEffect, useState } from 'react';
import Map from '../../../assets/map/mapp.jpg';

const Canvas = (props) => {
    const canvasRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const img = new Image();
        img.src = Map;

        img.onload = () => {
            canvas.width = 800;
            canvas.height = 400;
            context.fillStyle = '#ccc';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, offset.x, offset.y, img.width * scale, img.height * scale);
        };
    }, [scale, offset]);

    const handleZoomIn = () => {
        setScale(scale + 0.1);
    };

    const handleZoomOut = () => {
        if (scale > 0.1) {
            setScale(scale - 0.1);
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setOffset({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            handleZoomOut();
        } else {
            handleZoomIn();
        }
    };

    const handleMouseEnter = () => {
        document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
        document.body.style.overflow = 'auto';
    };

    return (
        <div
            style={{
                overflow: 'hidden', // Prevent page scrolling
                background: '#ccc', // Set background color of the container
            }}
        >
            <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onWheel={handleWheel}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    border: `5px solid #eb7411`,
                    boxSizing: 'border-box', // Ensure the box-sizing property
                }}
                {...props}
            />
        </div>
    );
};

export default Canvas;
