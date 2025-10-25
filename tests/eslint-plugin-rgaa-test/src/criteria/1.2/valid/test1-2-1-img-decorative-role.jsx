// Test 1.2.1 - Images <img> décoratives avec role="presentation" ou "none"
import React from 'react';

const Test1_2_1_ImgDecorativeRole = () => {
  return (
    <div>
      {/* Image décorative avec role="presentation" */}
      {/* eslint-rgaa: decorative */}
      <img src="decoration.png" role="presentation" />
      
      {/* Image décorative avec role="none" */}
      {/* eslint-rgaa: decorative */}
      <img src="separator.png" role="none" />
      
      {/* Image décorative avec role="presentation" et aria-hidden="true" */}
      {/* eslint-rgaa: decorative */}
      <img src="banner.jpg" role="presentation" aria-hidden="true" />
    </div>
  );
};

export default Test1_2_1_ImgDecorativeRole;
