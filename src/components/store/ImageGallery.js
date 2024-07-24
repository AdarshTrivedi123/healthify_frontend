import React from 'react';

const ImageGallery = ({ images, colors, texts }) => {
    return (
        <div className="store_image-gallery">
            {images.map((image, index) => (
                <div>
                    <div key={index} className="store_image-container" style={{ backgroundColor: colors[index % colors.length] }}>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                    <div className='img_text'>{texts[index]}</div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
