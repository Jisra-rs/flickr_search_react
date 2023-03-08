import React from 'react';
import Picture from '../Picture/Picture';
import './PicturesResults.css';

const PicturesResults = props => {
  const { pictureArray: results, handleOpenModal } = props;
  const images = results.photo.map(
    ({ farm, server, id, secret, title }, key) => (
      <li className="liphoto" key={(id)}>
        <Picture
          url={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
          id={key}
          key={key}
          title={title}
          handleOpenModal={handleOpenModal}
        />
      </li>
    )
  );

  return <ul className="ulphotos">{images}</ul>;
};

export default PicturesResults;
