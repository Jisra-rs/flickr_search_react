import React from 'react';
import './Picture.css';

const Picture = ({ url, title, id, handleOpenModal }) => (
  <img
    className="photo"
    src={url}
    alt={title}
    key={id}
    onClick={handleOpenModal}
    data-id={id}
  />
);

export default Picture;
