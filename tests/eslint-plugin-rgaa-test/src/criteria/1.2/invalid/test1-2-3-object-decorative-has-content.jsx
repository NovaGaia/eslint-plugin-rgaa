// Test 1.2.3 - Images objet <object> décoratives avec contenu alternatif
import React from 'react';

const Test1_2_3_ObjectDecorativeHasContent = () => {
  return (
    <div>
      {/* Objet décoratif avec contenu alternatif - ne devrait pas avoir de contenu */}
      <object type="image/svg+xml" data="decoration.svg" aria-hidden="true">
        Contenu alternatif
      </object>
      
      {/* Objet décoratif avec contenu alternatif - ne devrait pas avoir de contenu */}
      <object type="image/png" data="separator.png" aria-hidden="true">
        <p>Description de l'image</p>
      </object>
    </div>
  );
};

export default Test1_2_3_ObjectDecorativeHasContent;
