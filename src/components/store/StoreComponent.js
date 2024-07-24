import React from 'react';
import './Store.css';
import ImageGallery from './ImageGallery';
import MedicineCard from './MedicineCard'
const imageUrls = [
  'image/hero_gal1.png',
  'image/hero_gal2.png',
  'image/hero_gal3.png',
  'image/hero_gal4.png',
  'image/hero_gal5.png',
  'image/hero_gal6.png',
  'image/hero_gal7.png'
];
const colors = [
  '#FFD5A9',
  '#A4D6B9',
  '#FECCDC',
  '#D3CDF1',
  '#F2E988',
  '#FFB0B6',
  '#FCE7C5'
];
const texts = [
  'Cardiac Care',
  'Diabetic Care',
  'stomach care',
  'Eye care',
  'Baby Care',
  'Bones and Joints care',
  'Derma care'
];
const popular = [
  { id: 1, imageSrc: 'image/med1.png', name: 'Fish Oil 1000mg', price: 'Rs320.00' },
  { id: 2, imageSrc: 'image/med1.png', name: 'Fish Oil 1000mg', price: 'Rs320.00' },
  { id: 3, imageSrc: 'image/med1.png', name: 'Fish Oil 1000mg', price: 'Rs320.00' },
  { id: 4, imageSrc: 'image/med1.png', name: 'Fish Oil 1000mg', price: 'Rs320.00' },
  { id: 5, imageSrc: 'image/med1.png', name: 'Fish Oil 1000mg', price: 'Rs320.00' }
];
const trending = [
  { id: 1, imageSrc: 'image/med21.png', name: 'Volini Pain relief gel', price: 'Rs120.00' },
  { id: 1, imageSrc: 'image/med21.png', name: 'Volini Pain relief gel', price: 'Rs120.00' },
  { id: 1, imageSrc: 'image/med21.png', name: 'Volini Pain relief gel', price: 'Rs120.00' },
  { id: 1, imageSrc: 'image/med21.png', name: 'Volini Pain relief gel', price: 'Rs120.00' },
  { id: 1, imageSrc: 'image/med21.png', name: 'Volini Pain relief gel', price: 'Rs120.00' }
];
const arrival = [
  { id: 1, imageSrc: 'image/med31.png', name: 'Prohance D Vanilla Diabetes Care Powder', price: 'Rs720.00' },
  { id: 1, imageSrc: 'image/med31.png', name: 'Prohance D Vanilla Diabetes Care Powder', price: 'Rs720.00' },
  { id: 1, imageSrc: 'image/med31.png', name: 'Prohance D Vanilla Diabetes Care Powder', price: 'Rs720.00' },
  { id: 1, imageSrc: 'image/med31.png', name: 'Prohance D Vanilla Diabetes Care Powder', price: 'Rs720.00'},
  { id: 1, imageSrc: 'image/med31.png', name: 'Prohance D Vanilla Diabetes Care Powder', price: 'Rs720.00'}
];
const ayurved = [
  { id: 1, imageSrc: 'image/med41.png', name: 'Himalaya Liv.52 Ds Tablets - 60', price: 'Rs345.00' },
  { id: 1, imageSrc: 'image/med41.png', name: 'Himalaya Liv.52 Ds Tablets - 60', price: 'Rs345.00' },
  { id: 1, imageSrc: 'image/med41.png', name: 'Himalaya Liv.52 Ds Tablets - 60', price: 'Rs345.00' },
  { id: 1, imageSrc: 'image/med41.png', name: 'Himalaya Liv.52 Ds Tablets - 60', price: 'Rs345.00'},
  { id: 1, imageSrc: 'image/med41.png', name: 'Himalaya Liv.52 Ds Tablets - 60', price: 'Rs345.00'}
];
const homeo = [
  { id: 1, imageSrc: 'image/med51.png', name: 'Allen A24 Homeopathy Drops 30ml', price: 'Rs355.00' },
  { id: 1, imageSrc: 'image/med51.png', name: 'Allen A24 Homeopathy Drops 30ml', price: 'Rs355.00' },
  { id: 1, imageSrc: 'image/med51.png', name: 'Allen A24 Homeopathy Drops 30ml', price: 'Rs355.00' },
  { id: 1, imageSrc: 'image/med51.png', name: 'Allen A24 Homeopathy Drops 30ml', price: 'Rs355.00'},
  { id: 1, imageSrc: 'image/med51.png', name: 'Allen A24 Homeopathy Drops 30ml', price: 'Rs345.00'}
];
const Store = () => {
  return (
    <div className="store_container">

      <div className="store_hero">
        <div className='store_heroContent'>
          <div className='storehero_head'>Welcome to Our Online Store</div>
          <div className='subhead'>A place to trust for medicines</div>
          <div className='storehero_search'>
            <input
              type="text"
              className="storesearch-input"
              placeholder="Serach your medicine here"
            />
            <button className='storesearch_btn'>Search</button>
          </div>
        </div>
        <div><img src="image/hero_storeHeart.png" /></div>
      </div>

      <div className="store_categories">
        <div className='cat_head'>Top Categories</div>
        <ImageGallery images={imageUrls} colors={colors} texts={texts} />
      </div>

      <div className="store_medicines_section store_color_section">
        <h4>Popular Items</h4>
        <div className="medicine_slider">
            <MedicineCard items={popular} />
        </div>
      </div>

      <div className="store_medicines_section">
        <h4>Trending Medicines</h4>
        <div className="medicine_slider">
           <MedicineCard items={trending} />
        </div>
      </div>

      <div className="store_medicines_section store_color_section">
        <h4>New Arrivals</h4>
        <div className="medicine_slider">
          <MedicineCard items={arrival} />
        </div>
      </div>

      <div className="store_medicines_section">
        <h4>Ayurvedic Medicines</h4>
        <div className="medicine_slider">
          <MedicineCard items={ayurved} />
        </div>
      </div>

      <div className="store_medicines_section store_color_section">
        <h4>Homepathy Medicines</h4>
        <div className="medicine_slider">
          <MedicineCard items={homeo} />
        </div>
      </div>
    </div>
  );
};

export default Store;
