// Test 1.2.3 - Images objet <object> décoratives sans aria-hidden="true"
import React from 'react';

const Test1_2_3_ObjectDecorativeMissingAriaHidden = () => {
  return (
    <div>
      {/* Objet décoratif sans aria-hidden="true" - devrait avoir aria-hidden="true" */}
      <object type="image/svg+xml" data="decoration.svg"></object>
      
      {/* Objet décoratif avec aria-hidden="false" - devrait avoir aria-hidden="true" */}
      <object type="image/png" data="separator.png" aria-hidden="false"></object>
    </div>
  );
};

export default Test1_2_3_ObjectDecorativeMissingAriaHidden;
