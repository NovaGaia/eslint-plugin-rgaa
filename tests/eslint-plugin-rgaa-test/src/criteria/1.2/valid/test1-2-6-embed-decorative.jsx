// Test 1.2.6 - Images embarquées <embed type="image/..."> décoratives
import React from 'react';

const Test1_2_6_EmbedDecorative = () => {
  return (
    <div>
      {/* Embed décoratif avec aria-hidden="true" */}
      {/* eslint-rgaa: decorative */}
      <embed type="image/svg+xml" src="decoration.svg" aria-hidden="true" />
      
      {/* Embed décoratif avec aria-hidden="true" */}
      {/* eslint-rgaa: decorative */}
      <embed type="image/png" src="separator.png" aria-hidden="true" />
    </div>
  );
};

export default Test1_2_6_EmbedDecorative;
