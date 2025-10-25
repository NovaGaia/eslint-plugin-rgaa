// Test 1.2.1 - Images <img> décoratives sans marquage correct
import React from 'react';

const Test1_2_1_ImgDecorativeMissingMarking = () => {
  return (
    <div>
      {/* Image décorative sans marquage - devrait avoir alt="" ou aria-hidden="true" ou role="presentation" */}
      <img src="decoration.png" />
      
      {/* Image décorative avec alt manquant - devrait avoir alt="" */}
      <img src="separator.png" />
      
      {/* Image décorative sans aucun marquage décoratif */}
      <img src="banner.jpg" />
    </div>
  );
};

export default Test1_2_1_ImgDecorativeMissingMarking;
