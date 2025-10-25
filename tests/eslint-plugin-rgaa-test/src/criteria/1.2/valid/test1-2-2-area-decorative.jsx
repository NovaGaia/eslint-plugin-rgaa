// Test 1.2.2 - Zones <area> décoratives (sans href)
import React from 'react';

const Test1_2_2_AreaDecorative = () => {
  return (
    <div>
      <map name="decorative-map">
        {/* Zone décorative avec alt="" */}
        <area shape="rect" coords="0,0,100,100" alt="" />
        
        {/* Zone décorative avec aria-hidden="true" */}
        <area shape="circle" coords="50,50,25" aria-hidden="true" />
        
        {/* Zone décorative avec role="presentation" */}
        <area shape="poly" coords="0,0,50,0,25,50" role="presentation" />
        
        {/* Zone décorative avec role="none" */}
        <area shape="rect" coords="100,100,200,200" role="none" />
      </map>
    </div>
  );
};

export default Test1_2_2_AreaDecorative;
