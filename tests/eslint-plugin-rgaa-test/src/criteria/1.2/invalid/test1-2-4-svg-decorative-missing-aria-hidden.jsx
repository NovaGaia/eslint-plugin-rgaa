// Test 1.2.4 - Images vectorielles <svg> décoratives sans aria-hidden="true"
import React from 'react';

const Test1_2_4_SvgDecorativeMissingAriaHidden = () => {
  return (
    <div>
      {/* SVG décoratif sans aria-hidden="true" - devrait avoir aria-hidden="true" */}
      <svg>
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG décoratif avec aria-hidden="false" - devrait avoir aria-hidden="true" */}
      <svg aria-hidden="false">
        <rect width="100" height="100" fill="blue" />
      </svg>
    </div>
  );
};

export default Test1_2_4_SvgDecorativeMissingAriaHidden;
