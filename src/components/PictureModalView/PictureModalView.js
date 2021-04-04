import React from 'react';

import './PictureModalView.css';

const PictureModalView = ({
  pictureArray,
  indexPic,
  nextPicture,
  prevPicture,
  handleCloseModal,
  btnIniModDisable,
  btnFinModDisable,
}) => {
  const { farm, server, id, secret, title } = pictureArray.photo[indexPic];
  const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  return (
    <div className="modal">
      <span className="caption"> Information | - - {title}</span>
      <span className="close" onClick={handleCloseModal}>
        ×
      </span>
      <div className="button_div">
        <button disabled={btnIniModDisable} onClick={prevPicture}>
          &lt;
        </button>
        <button disabled={btnFinModDisable} onClick={nextPicture}>
          &gt;
        </button>
      </div>
      <div>
        <img className="modal-content" src={url} alt={title}></img>
      </div>
    </div>
  );
};

export default PictureModalView;
