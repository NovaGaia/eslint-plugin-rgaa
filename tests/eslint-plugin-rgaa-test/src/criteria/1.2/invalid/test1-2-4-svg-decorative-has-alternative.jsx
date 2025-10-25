// Test 1.2.4 - Images vectorielles <svg> décoratives avec attributs d'alternative
import React from 'react';

const Test1_2_4_SvgDecorativeHasAlternative = () => {
  return (
    <div>
      {/* SVG décoratif avec aria-label - ne devrait pas avoir d'attributs d'alternative */}
      <svg aria-hidden="true" aria-label="Décoration">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG décoratif avec aria-labelledby - ne devrait pas avoir d'attributs d'alternative */}
      <svg aria-hidden="true" aria-labelledby="svg-desc">
        <rect width="100" height="100" fill="blue" />
      </svg>
    </div>
  );
};

export default Test1_2_4_SvgDecorativeHasAlternative;
