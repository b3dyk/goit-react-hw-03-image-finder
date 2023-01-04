import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {};

  handleSubmit = () => {};

  render() {
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

        <ImageGallery />

        <Modal />
      </div>
    );
  }
}
