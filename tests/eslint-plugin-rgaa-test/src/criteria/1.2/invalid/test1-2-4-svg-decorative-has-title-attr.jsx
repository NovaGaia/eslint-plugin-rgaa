// Test 1.2.4 - Images vectorielles <svg> décoratives avec attributs title
import React from 'react';

const Test1_2_4_SvgDecorativeHasTitleAttr = () => {
  return (
    <div>
      {/* SVG décoratif avec attribut title - ne devrait pas avoir d'attributs title */}
      <svg aria-hidden="true" title="Décoration">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG décoratif avec attribut title sur un enfant - ne devrait pas avoir d'attributs title */}
      <svg aria-hidden="true">
        <circle cx="50" cy="50" r="40" fill="red" title="Cercle décoratif" />
      </svg>
    </div>
  );
};

export default Test1_2_4_SvgDecorativeHasTitleAttr;
