import React from 'react';
import './Store.css';
const MedicineCard = ({ items }) => {
  return (
    <div className="medicine_slider">
      {items.map(item => (
        <div className="medicine_card" key={item.id}>
          <div className="medicine_img">
            <img src={item.imageSrc} alt={item.name} />
          </div>
          <div className='medicine_txt'>{item.name}</div>
          <div className='medicine_price'>{item.price}</div>
          <hr className="price-divider" />
          <div>
            <button className="add_to_cart">Add to cart</button>
            <button className="add_to_cart">Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicineCard;
