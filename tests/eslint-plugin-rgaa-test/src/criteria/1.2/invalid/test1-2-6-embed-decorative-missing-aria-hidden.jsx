// Test 1.2.6 - Images embarquées <embed> décoratives sans aria-hidden="true"
import React from 'react';

const Test1_2_6_EmbedDecorativeMissingAriaHidden = () => {
  return (
    <div>
      {/* Embed décoratif sans aria-hidden="true" - devrait avoir aria-hidden="true" */}
      <embed type="image/svg+xml" src="decoration.svg" />
      
      {/* Embed décoratif avec aria-hidden="false" - devrait avoir aria-hidden="true" */}
      <embed type="image/png" src="separator.png" aria-hidden="false" />
    </div>
  );
};

export default Test1_2_6_EmbedDecorativeMissingAriaHidden;
