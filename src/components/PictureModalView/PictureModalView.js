import React from 'react';

import './pictureModalView.css'

const PictureModalView = props => {

    const { pictureArray, indexPic, nextPicture, prevPicture, 
            handleCloseModal, btnIniModDisable, btnFinModDisable } = props

    let pictureToShow= pictureArray.photo[indexPic];
    let farm = pictureToShow.farm;
    let server = pictureToShow.server;
    let imageId = pictureToShow.id;
    let secret = pictureToShow.secret;
    let title = pictureToShow.title;
    let url = `https://farm${ farm }.staticflickr.com/${ server }/${ imageId }_${ secret }_m.jpg`;

    return(

    <div className="modal"> 
        <span className="caption"> Information | -&nbsp;- { title }</span>
        <span className="close" onClick= { handleCloseModal }>&times;</span>
        <div className="button_div">
            <button disabled={ btnIniModDisable } onClick= { prevPicture } > &lt; </button>
            <button disabled={ btnFinModDisable } onClick= { nextPicture } > &gt; </button>
        </div>
        <div>
            <img className="modal-content" src={ url } alt='modal'></img>
        </div>
         
    </div>

    );
}

export default PictureModalView;