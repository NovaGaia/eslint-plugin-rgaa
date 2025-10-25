// Test 1.2.5 - Images bitmap <canvas> décoratives sans aria-hidden="true"
import React from 'react';

const Test1_2_5_CanvasDecorativeMissingAriaHidden = () => {
  return (
    <div>
      {/* Canvas décoratif sans aria-hidden="true" - devrait avoir aria-hidden="true" */}
      <canvas></canvas>
      
      {/* Canvas décoratif avec aria-hidden="false" - devrait avoir aria-hidden="true" */}
      <canvas width="100" height="100" aria-hidden="false"></canvas>
    </div>
  );
};

export default Test1_2_5_CanvasDecorativeMissingAriaHidden;
