import React from 'react';
import Picture from '../Picture/Picture';
import './picturesResults.css';

const PicturesResults = props => {
  const { pictureArray, handleOpenModal } = props;
  const results = pictureArray;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.photo.length > 0) {
    images = results.photo.map((image, i) => {
      let farm = image.farm;
      let server = image.server;
      let id = i;
      let imageId = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${imageId}_${secret}_m.jpg`;
      return (
        <Picture
          url={url}
          key={id}
          id={id}
          alt={title}
          handleOpenModal={handleOpenModal}
        />
      );
    });
  } else {
    // noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div className="_divphotos">
      <ul className="_ulphotos">{images}</ul>
      {noImages}
    </div>
  );
};

export default PicturesResults;
