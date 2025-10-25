import React from 'react';

// Exemples RGAA 1.2 - Images de décoration (CORRECTES)
const ExampleRGAA1_2Correct = () => {
  return (
    <div>
      <h1>RGAA 1.2 - Images de décoration (CORRECTES)</h1>
      
      {/* Test 1.2.1 - Images img décoratives correctement marquées */}
      <div>
        <h2>Images &lt;img /&gt; décoratives</h2>
        {/* eslint-rgaa: decorative */}
        <img src="decoration.png" alt="" />
        {/* eslint-rgaa: decorative */}
        <img src="separator.png" alt="" role="presentation" />
        {/* eslint-rgaa: decorative */}
        <img src="banner.jpg" alt="" aria-hidden="true" />
        {/* eslint-rgaa: decorative */}
        <img src="icon.svg" role="presentation" />
        {/* eslint-rgaa: decorative */}
        <img src="pattern.jpg" role="none" />
      </div>
      
      {/* Test 1.2.2 - Zones area décoratives (sans href) */}
      <div>
        <h2>Zones &lt;area /&gt; décoratives</h2>
        <map name="decorative-map">
          {/* eslint-rgaa: decorative */}
          <area shape="rect" coords="0,0,100,100" alt="" />
          {/* eslint-rgaa: decorative */}
          <area shape="circle" coords="50,50,25" aria-hidden="true" />
          {/* eslint-rgaa: decorative */}
          <area shape="poly" coords="0,0,50,0,25,50" role="presentation" />
          {/* eslint-rgaa: decorative */}
          <area shape="rect" coords="100,100,200,200" role="none" />
        </map>
      </div>
      
      {/* Test 1.2.3 - Images objet object décoratives */}
      <div>
        <h2>Images objet &lt;object /&gt; décoratives</h2>
        {/* eslint-rgaa: decorative */}
        <object type="image/svg+xml" data="decoration.svg" aria-hidden="true"></object>
        {/* eslint-rgaa: decorative */}
        <object type="image/png" data="separator.png" aria-hidden="true"></object>
      </div>
      
      {/* Test 1.2.4 - Images vectorielles svg décoratives */}
      <div>
        <h2>Images vectorielles &lt;svg&gt; décoratives</h2>
        {/* eslint-rgaa: decorative */}
        <svg aria-hidden="true">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        {/* eslint-rgaa: decorative */}
        <svg aria-hidden="true">
          <title></title>
          <desc></desc>
          <rect width="100" height="100" fill="blue" />
        </svg>
      </div>
      
      {/* Test 1.2.5 - Images bitmap canvas décoratives */}
      <div>
        <h2>Images bitmap &lt;canvas&gt; décoratives</h2>
        {/* eslint-rgaa: decorative */}
        <canvas aria-hidden="true"></canvas>
        {/* eslint-rgaa: decorative */}
        <canvas width="100" height="100" aria-hidden="true"></canvas>
      </div>
      
      {/* Test 1.2.6 - Images embarquées embed décoratives */}
      <div>
        <h2>Images embarquées &lt;embed /&gt; décoratives</h2>
        {/* eslint-rgaa: decorative */}
        <embed type="image/svg+xml" src="decoration.svg" aria-hidden="true" />
        {/* eslint-rgaa: decorative */}
        <embed type="image/png" src="separator.png" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ExampleRGAA1_2Correct;