// Test 1.2.4 - Images vectorielles <svg> décoratives
import React from 'react';

const Test1_2_4_SvgDecorative = () => {
  return (
    <div>
      {/* SVG décoratif avec aria-hidden="true" */}
      {/* eslint-rgaa: decorative */}
      <svg aria-hidden="true">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG décoratif avec aria-hidden="true" et éléments title/desc vides */}
      {/* eslint-rgaa: decorative */}
      <svg aria-hidden="true">
        <title></title>
        <desc></desc>
        <rect width="100" height="100" fill="blue" />
      </svg>
      
      {/* SVG décoratif avec aria-hidden="true" et sans attributs title */}
      {/* eslint-rgaa: decorative */}
      <svg aria-hidden="true">
        <path d="M10 10 L20 20" stroke="black" />
      </svg>
    </div>
  );
};

export default Test1_2_4_SvgDecorative;
