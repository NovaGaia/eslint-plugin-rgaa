// Test 1.2.3 - Images objet <object type="image/..."> décoratives
import React from 'react';

const Test1_2_3_ObjectDecorative = () => {
  return (
    <div>
      {/* Objet décoratif avec aria-hidden="true" */}
      {/* eslint-rgaa: decorative */}
      <object type="image/svg+xml" data="decoration.svg" aria-hidden="true"></object>
      
      {/* Objet décoratif avec aria-hidden="true" et sans contenu */}
      {/* eslint-rgaa: decorative */}
      <object type="image/png" data="separator.png" aria-hidden="true"></object>
    </div>
  );
};

export default Test1_2_3_ObjectDecorative;
