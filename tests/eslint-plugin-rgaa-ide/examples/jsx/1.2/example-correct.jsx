import React from 'react';

// Exemples RGAA 1.2 - Images de décoration (CORRECTES)
const ExampleRGAA1_2Correct = () => {
  return (
    <div>
      <h1>RGAA 1.2 - Images de décoration (CORRECTES)</h1>
      
      {/* Test 1.2.1 - Images img décoratives correctement marquées */}
      <div>
        <h2>Images img décoratives</h2>
        <img src="decoration.png" alt="" />
        <img src="separator.png" alt="" role="presentation" />
        <img src="banner.jpg" alt="" aria-hidden="true" />
        <img src="icon.svg" role="presentation" />
        <img src="pattern.jpg" role="none" />
      </div>
      
      {/* Test 1.2.2 - Zones area décoratives (sans href) */}
      <div>
        <h2>Zones area décoratives</h2>
        <map name="decorative-map">
          <area shape="rect" coords="0,0,100,100" alt="" />
          <area shape="circle" coords="50,50,25" aria-hidden="true" />
          <area shape="poly" coords="0,0,50,0,25,50" role="presentation" />
          <area shape="rect" coords="100,100,200,200" role="none" />
        </map>
      </div>
      
      {/* Test 1.2.3 - Images objet object décoratives */}
      <div>
        <h2>Images objet object décoratives</h2>
        <object type="image/svg+xml" data="decoration.svg" aria-hidden="true"></object>
        <object type="image/png" data="separator.png" aria-hidden="true"></object>
      </div>
      
      {/* Test 1.2.4 - Images vectorielles svg décoratives */}
      <div>
        <h2>Images vectorielles svg décoratives</h2>
        <svg aria-hidden="true">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        <svg aria-hidden="true">
          <title></title>
          <desc></desc>
          <rect width="100" height="100" fill="blue" />
        </svg>
      </div>
      
      {/* Test 1.2.5 - Images bitmap canvas décoratives */}
      <div>
        <h2>Images bitmap canvas décoratives</h2>
        <canvas aria-hidden="true"></canvas>
        <canvas width="100" height="100" aria-hidden="true"></canvas>
      </div>
      
      {/* Test 1.2.6 - Images embarquées embed décoratives */}
      <div>
        <h2>Images embarquées embed décoratives</h2>
        <embed type="image/svg+xml" src="decoration.svg" aria-hidden="true" />
        <embed type="image/png" src="separator.png" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ExampleRGAA1_2Correct;