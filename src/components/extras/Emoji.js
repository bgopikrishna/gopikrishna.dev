import React from 'react';

const Emoji = ({ label, emoji }) => {
  return (
    <span role="img" aria-label={label}>
      &nbsp;{emoji}&nbsp;
    </span>
  );
};

export default Emoji;
