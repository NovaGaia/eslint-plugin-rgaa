// Test 1.2.1 - Images <img> décoratives avec aria-hidden="true"
import React from 'react';

const Test1_2_1_ImgDecorativeAriaHidden = () => {
  return (
    <div>
      {/* Image décorative avec aria-hidden="true" */}
      <img src="decoration.png" aria-hidden="true" />
      
      {/* Image décorative avec aria-hidden="true" et role="presentation" */}
      <img src="separator.png" aria-hidden="true" role="presentation" />
    </div>
  );
};

export default Test1_2_1_ImgDecorativeAriaHidden;
