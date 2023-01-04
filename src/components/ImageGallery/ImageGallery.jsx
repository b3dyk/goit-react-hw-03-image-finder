import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images?.hits.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
      ))}
      <ImageGalleryItem />
    </ul>
  );
};
