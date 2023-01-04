import React from 'react';

export const Button = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={() => onClick(2)}>
        Load More
      </button>
    </div>
  );
};
