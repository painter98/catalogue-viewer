import React from 'react';
import './Viewer.css';

function Viewer({ catalogImage }) {
  return (
    <div className='container'>
      <img 
        alt='catalog-view' 
        className='image' 
        src={catalogImage.src}
        data-testid='catalog-view' 
      />
      <p className='description'>
        <h1>{catalogImage.title}</h1>
        {catalogImage.desc}
      </p>
    </div>
  )
}

export default Viewer;