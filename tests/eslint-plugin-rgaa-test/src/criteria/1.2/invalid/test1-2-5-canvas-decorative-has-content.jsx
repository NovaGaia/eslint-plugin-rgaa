// Test 1.2.5 - Images bitmap <canvas> décoratives avec contenu alternatif
import React from 'react';

const Test1_2_5_CanvasDecorativeHasContent = () => {
  return (
    <div>
      {/* Canvas décoratif avec contenu alternatif - ne devrait pas avoir de contenu */}
      <canvas aria-hidden="true">
        Contenu alternatif
      </canvas>
      
      {/* Canvas décoratif avec contenu alternatif - ne devrait pas avoir de contenu */}
      <canvas width="100" height="100" aria-hidden="true">
        <p>Description de l'image</p>
      </canvas>
    </div>
  );
};

export default Test1_2_5_CanvasDecorativeHasContent;
