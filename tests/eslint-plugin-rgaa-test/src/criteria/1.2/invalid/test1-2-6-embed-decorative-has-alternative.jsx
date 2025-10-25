// Test 1.2.6 - Images embarquées <embed> décoratives avec attributs d'alternative
import React from 'react';

const Test1_2_6_EmbedDecorativeHasAlternative = () => {
  return (
    <div>
      {/* Embed décoratif avec aria-label - ne devrait pas avoir d'attributs d'alternative */}
      <embed type="image/svg+xml" src="decoration.svg" aria-hidden="true" aria-label="Décoration" />
      
      {/* Embed décoratif avec title - ne devrait pas avoir d'attributs d'alternative */}
      <embed type="image/png" src="separator.png" aria-hidden="true" title="Séparateur" />
    </div>
  );
};

export default Test1_2_6_EmbedDecorativeHasAlternative;
