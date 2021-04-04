import React from 'react';
import './picture.css';

const Picture = ({ url, alt, id, handleOpenModal }) => (
  <li className="_liphoto">
    <img
      className="_photo"
      src={url}
      alt={alt}
      key={id}
      onClick={handleOpenModal}
      data-id={id}
    />
  </li>
);

export default Picture;
