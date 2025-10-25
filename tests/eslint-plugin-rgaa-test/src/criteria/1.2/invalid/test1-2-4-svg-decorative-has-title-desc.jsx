// Test 1.2.4 - Images vectorielles <svg> décoratives avec éléments title/desc
import React from 'react';

const Test1_2_4_SvgDecorativeHasTitleDesc = () => {
  return (
    <div>
      {/* SVG décoratif avec élément title - ne devrait pas avoir d'éléments title/desc avec contenu */}
      <svg aria-hidden="true">
        <title>Décoration</title>
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG décoratif avec élément desc - ne devrait pas avoir d'éléments title/desc avec contenu */}
      <svg aria-hidden="true">
        <desc>Description de la décoration</desc>
        <rect width="100" height="100" fill="blue" />
      </svg>
    </div>
  );
};

export default Test1_2_4_SvgDecorativeHasTitleDesc;
