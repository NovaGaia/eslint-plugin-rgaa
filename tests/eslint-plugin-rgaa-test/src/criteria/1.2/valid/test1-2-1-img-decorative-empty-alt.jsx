// Test 1.2.1 - Images <img> décoratives avec alt=""
import React from 'react';

const Test1_2_1_ImgDecorativeEmptyAlt = () => {
  return (
    <div>
      {/* Image décorative avec alt="" */}
      <img src="decoration.png" alt="" />
      
      {/* Image décorative avec alt="" et role="presentation" */}
      <img src="separator.png" alt="" role="presentation" />
      
      {/* Image décorative avec alt="" et aria-hidden="true" */}
      <img src="banner.jpg" alt="" aria-hidden="true" />
    </div>
  );
};

export default Test1_2_1_ImgDecorativeEmptyAlt;
