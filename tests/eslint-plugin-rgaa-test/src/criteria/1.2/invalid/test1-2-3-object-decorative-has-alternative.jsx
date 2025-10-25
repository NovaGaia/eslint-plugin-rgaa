// Test 1.2.3 - Images objet <object> décoratives avec attributs d'alternative
import React from 'react';

const Test1_2_3_ObjectDecorativeHasAlternative = () => {
  return (
    <div>
      {/* Objet décoratif avec aria-label - ne devrait pas avoir d'attributs d'alternative */}
      <object type="image/svg+xml" data="decoration.svg" aria-hidden="true" aria-label="Décoration"></object>
      
      {/* Objet décoratif avec title - ne devrait pas avoir d'attributs d'alternative */}
      <object type="image/png" data="separator.png" aria-hidden="true" title="Séparateur"></object>
    </div>
  );
};

export default Test1_2_3_ObjectDecorativeHasAlternative;
