import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImages } from 'services/images.service';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    isError: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    this.fetchData();
  }

  handleSubmit = () => {};

  fetchData = async (page = 1) => {
    this.setState({ isLoading: true });

    try {
      const data = await getImages(page);
      this.setState({ images: data });
    } catch (error) {
      this.setState({ isError: true });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, isError } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#122236',
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
          marginTop: '16px',
          fontSize: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />

        {isError && <h2>Oops... Something went wrong</h2>}

        <ImageGallery images={images} />

        {images && <Button onClick={this.fetchData} />}

        {isLoading && <Loader />}

        <Modal />
      </div>
    );
  }
}
