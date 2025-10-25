// Test 1.2.2 - Zones <area> décoratives sans marquage correct
import React from 'react';

const Test1_2_2_AreaDecorativeMissingMarking = () => {
  return (
    <div>
      <map name="decorative-map">
        {/* Zone décorative sans marquage - devrait avoir alt="" ou aria-hidden="true" ou role="presentation" */}
        <area shape="rect" coords="0,0,100,100" />
        
        {/* Zone décorative sans marquage correct */}
        <area shape="circle" coords="50,50,25" />
      </map>
    </div>
  );
};

export default Test1_2_2_AreaDecorativeMissingMarking;
