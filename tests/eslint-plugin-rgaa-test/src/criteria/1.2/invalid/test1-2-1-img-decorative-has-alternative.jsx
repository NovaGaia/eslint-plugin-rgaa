// Test 1.2.1 - Images <img> décoratives avec attributs d'alternative
import React from 'react';

const Test1_2_1_ImgDecorativeHasAlternative = () => {
  return (
    <div>
      {/* Image décorative avec aria-label - ne devrait pas avoir d'attributs d'alternative */}
      <img src="decoration.png" alt="" aria-label="Décoration" />
      
      {/* Image décorative avec title - ne devrait pas avoir d'attributs d'alternative */}
      <img src="separator.png" alt="" title="Séparateur" />
      
      {/* Image décorative avec aria-labelledby - ne devrait pas avoir d'attributs d'alternative */}
      <img src="banner.jpg" alt="" aria-labelledby="banner-desc" />
    </div>
  );
};

export default Test1_2_1_ImgDecorativeHasAlternative;
