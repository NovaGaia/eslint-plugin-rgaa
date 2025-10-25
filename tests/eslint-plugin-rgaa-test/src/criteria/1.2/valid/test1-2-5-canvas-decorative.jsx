// Test 1.2.5 - Images bitmap <canvas> décoratives
import React from 'react';

const Test1_2_5_CanvasDecorative = () => {
  return (
    <div>
      {/* Canvas décoratif avec aria-hidden="true" */}
      {/* eslint-rgaa: decorative */}
      <canvas aria-hidden="true"></canvas>
      
      {/* Canvas décoratif avec aria-hidden="true" et sans contenu */}
      {/* eslint-rgaa: decorative */}
      <canvas width="100" height="100" aria-hidden="true"></canvas>
    </div>
  );
};

export default Test1_2_5_CanvasDecorative;
