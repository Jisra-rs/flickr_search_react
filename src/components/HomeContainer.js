import React, { Component } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import SearchTool from './SearchTool/SearchTool';
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
      isFetched: true,
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

  handleSearch = async (search, page) => {
    const responseJson = await getPicturesBySearch(search, page);
    this.setState({
      search: search,
      pictureArray: responseJson.photos,
      isFetched: false,
      lastPage: responseJson.photos.pages,
      page: responseJson.photos.page,
      total: responseJson.photos.total,
    });
    if (responseJson.photos.page !== 1) {
      this.setState({
        btnIniPagDisable: false,
      });
    } else {
      this.setState({
        btnIniPagDisable: true,
      });
    }
    if (responseJson.photos.page !== responseJson.photos.pages) {
      this.setState({
        btnFinPagDisable: false,
      });
    } else {
      this.setState({
        btnFinPagDisable: true,
      });
    }
  };

  /* 
        Modal
     */
  // Abrir modal
  handleOpenModal = e => {
    let indexPicArray = Number(e.target.dataset.id);
    let totalPic = this.state.total - 1;
    this.setState({
      hideModal: false,
      indexPic: indexPicArray,
      btnIniModDisable: false,
      btnFinModDisable: false,
    });
    if (indexPicArray === totalPic)
      this.setState({
        btnFinModDisable: true,
      });
    if (indexPicArray === 0)
      this.setState({
        btnIniModDisable: true,
      });
  };

  // Cerrar modal
  handleCloseModal = () => {
    this.setState({
      hideModal: true,
      indexPic: 0,
      btnIniModDisable: false,
      btnFinModDisable: false,
    });
  };
  // Control botón Next
  nextPicture = () => {
    const newIndex = this.state.indexPic + 1;
    const totalPic = this.state.total - 1;
    this.setState({
      indexPic: newIndex,
      btnIniModDisable: false,
      btnFinModDisable: false,
    });
    if (newIndex === totalPic)
      this.setState({
        btnFinModDisable: true,
      });
  };
  // Control botón Previo
  prevPicture = () => {
    const newIndex = this.state.indexPic - 1;
    this.setState({
      indexPic: newIndex,
      btnIniModDisable: false,
      btnFinModDisable: false,
    });
    if (newIndex === 0)
      this.setState({
        btnIniModDisable: true,
      });
  };

  render() {
    const {
      isFetched,
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
        <SearchTool handleSearch={this.handleSearch} />
        {isFetched ? (
          <Loader />
        ) : (
          <PaginationResults
            handleSearch={this.handleSearch}
            page={page}
            lastPage={lastPage}
            btnIniPagDisable={btnIniPagDisable}
            btnFinPagDisable={btnFinPagDisable}
            search={search}
          />
        )}
        {isFetched ? (
          <Loader />
        ) : (
          <PicturesResults
            pictureArray={pictureArray}
            handleOpenModal={this.handleOpenModal}
          />
        )}
        {hideModal ? (
          <Loader />
        ) : (
          <PictureModalView
            pictureArray={pictureArray}
            indexPic={indexPic}
            btnIniModDisable={btnIniModDisable}
            btnFinModDisable={btnFinModDisable}
            prevPicture={this.prevPicture}
            nextPicture={this.nextPicture}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}

export default HomeContainer;
