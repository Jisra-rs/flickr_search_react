import React, { Component } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import SearchToolbar from './SearchToolbar/SearchToolbar';
import PicturesResults from './PicturesResults/PicturesResults';
import Loader from './Loader';
import { getPicturesBySearch } from '../services/PicturesService';
import PaginationResults from './PaginationResults/PaginationResults';
import PictureModalView from './PictureModalView/PictureModalView';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureArray: [],
      isFetching: true,
      total: 0,
      page: 1,
      lastPage: 0,
      search: '',
      btnIniPagDisable: true,
      btnFinPagDisable: true,
      btnIniModDisable: true,
      btnFinModDisable: true,
      hideModal: true,
      indexPic: 0,
    };
  }

  handleSearch = async (search, pageNumber) => {
    const pictures = await getPicturesBySearch(search, pageNumber);
    const { photos: pictureArray } = pictures;
    const { pages: lastPage, page, total } = pictureArray;
    this.setState({
      search,
      pictureArray,
      isFetching: false,
      lastPage,
      page,
      total,
    });

    this.setState({
      btnIniPagDisable: page === 1,
      btnFinPagDisable: page === lastPage,
    });
  };

  handleOpenModal = event => {
    let indexPicArray = Number(event?.target?.dataset?.id);
    let totalPic = this.state.total - 1;
    this.setState({
      hideModal: false,
      indexPic: indexPicArray,
      btnFinModDisable: indexPicArray === totalPic - 1,
      btnIniModDisable: indexPicArray === 0,
    });
  };

  handleCloseModal = () => {
    this.setState({
      hideModal: true,
      indexPic: 0,
      btnIniModDisable: false,
      btnFinModDisable: false,
    });
  };

  nextPicture = () => {
    const newIndex = this.state.indexPic + 1;
    const totalPic = this.state.total - 1;
    this.setState({
      indexPic: newIndex,
      btnIniModDisable: false,
      btnFinModDisable: newIndex === totalPic - 1,
    });
  };

  prevPicture = () => {
    const newIndex = this.state.indexPic - 1;
    this.setState({
      indexPic: newIndex,
      btnIniModDisable: newIndex === 0,
      btnFinModDisable: false,
    });
  };

  render() {
    const {
      isFetching,
      hideModal,
      pictureArray,
      page,
      lastPage,
      search,
      btnIniPagDisable,
      btnFinPagDisable,
      indexPic,
      btnIniModDisable,
      btnFinModDisable,
    } = this.state;

    return (
      <>
        <HomeHeader />
        <SearchToolbar handleSearch={this.handleSearch} />

        {isFetching ? (
          <Loader />
        ) : (
          <>
            <PaginationResults
              handleSearch={this.handleSearch}
              page={page}
              lastPage={lastPage}
              btnIniPagDisable={btnIniPagDisable}
              btnFinPagDisable={btnFinPagDisable}
              search={search}
            />
            <PicturesResults
              pictureArray={pictureArray}
              handleOpenModal={this.handleOpenModal}
            />
            {!hideModal ? (
              <PictureModalView
                pictureArray={pictureArray}
                indexPic={indexPic}
                btnIniModDisable={btnIniModDisable}
                btnFinModDisable={btnFinModDisable}
                prevPicture={this.prevPicture}
                nextPicture={this.nextPicture}
                handleCloseModal={this.handleCloseModal}
              />
            ) : null}
          </>
        )}
      </>
    );
  }
}

export default HomeContainer;
