// Test 1.2.2 - Zones <area> décoratives avec attributs d'alternative
import React from 'react';

const Test1_2_2_AreaDecorativeHasAlternative = () => {
  return (
    <div>
      <map name="decorative-map">
        {/* Zone décorative avec aria-label - ne devrait pas avoir d'attributs d'alternative */}
        <area shape="rect" coords="0,0,100,100" alt="" aria-label="Zone décorative" />
        
        {/* Zone décorative avec title - ne devrait pas avoir d'attributs d'alternative */}
        <area shape="circle" coords="50,50,25" alt="" title="Zone décorative" />
      </map>
    </div>
  );
};

export default Test1_2_2_AreaDecorativeHasAlternative;
