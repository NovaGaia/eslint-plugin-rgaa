// Test 1.2.5 - Images bitmap <canvas> décoratives avec attributs d'alternative
import React from 'react';

const Test1_2_5_CanvasDecorativeHasAlternative = () => {
  return (
    <div>
      {/* Canvas décoratif avec aria-label - ne devrait pas avoir d'attributs d'alternative */}
      <canvas aria-hidden="true" aria-label="Décoration"></canvas>
      
      {/* Canvas décoratif avec title - ne devrait pas avoir d'attributs d'alternative */}
      <canvas width="100" height="100" aria-hidden="true" title="Séparateur"></canvas>
    </div>
  );
};

export default Test1_2_5_CanvasDecorativeHasAlternative;
