import React from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

export const Modal = ({ image: { src, alt }, onClose }) => {
  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.exact({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
