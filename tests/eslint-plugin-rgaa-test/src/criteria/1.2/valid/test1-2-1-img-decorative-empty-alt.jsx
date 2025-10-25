// Test 1.2.1 - Images <img> décoratives avec alt=""
import React from 'react';

const Test1_2_1_ImgDecorativeEmptyAlt = () => {
  return (
    <div>
      {/* Image décorative avec alt="" */}
      {/* eslint-rgaa: decorative */}
      <img src="decoration.png" alt="" />
      
      {/* Image décorative avec alt="" et role="presentation" */}
      {/* eslint-rgaa: decorative */}
      <img src="separator.png" alt="" role="presentation" />
      
      {/* Image décorative avec alt="" et aria-hidden="true" */}
      {/* eslint-rgaa: decorative */}
      <img src="banner.jpg" alt="" aria-hidden="true" />
    </div>
  );
};

export default Test1_2_1_ImgDecorativeEmptyAlt;
