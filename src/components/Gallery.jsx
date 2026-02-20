import React, { useState } from 'react';
import '../css/Gallery.css';

const Gallery = ({ className = '', width, height, radius = '4px', showThumbs, images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const containerStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
  };

  const imageStyle = {
    borderRadius: radius,
  };

  const thumbStyle = {
    borderRadius: radius,
  };

  if (!images.length) return null;

  return (
    <div className={`gallery-container ${className}`} style={containerStyle}>
      <div className="gallery-main">
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          <img src="/assets/arrow-left.svg" alt="Previous" />
        </button>

        <div className="gallery-image-wrapper">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="gallery-image"
            style={imageStyle}
          />
        </div>

        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={goToNext}
          disabled={currentIndex === images.length - 1}
        >
          <img src="/assets/arrow-right.svg" alt="Next" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
              style={thumbStyle}
            >
              <img src={image.src} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
