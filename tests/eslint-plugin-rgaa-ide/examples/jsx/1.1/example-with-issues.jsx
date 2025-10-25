import React from 'react';

// Exemples RGAA 1.1 - Images porteuses d'information (AVEC ERREURS)
const ExampleRGAA1_1WithIssues = () => {
  return (
    <div>
      <h1>RGAA 1.1 - Images porteuses d'information (AVEC ERREURS)</h1>
      
      {/* Test 1.1.1 - Images img sans alternatives */}
      <div>
        <h2>Images &lt;img /&gt; sans alternatives</h2>
        {/* Erreur : Image sans attribut alt */}
        <img src="logo.png" />
        
        {/* Erreur : Image avec alt vide mais pas marquée comme décorative */}
        <img src="chart.png" alt="" />
        
        
        {/* Erreur : Image avec alt contenant seulement des espaces */}
        <img src="icon.svg" alt="   " />
        
        
        {/* Erreur : Image informative par défaut mais sans alternative */}
        <img src="chart.png" />
      </div>
      
      {/* Test 1.1.2 - Zones area sans alternatives */}
      <div>
        <h2>Zones &lt;area /&gt; sans alternatives</h2>
        <img src="navigation.png" useMap="#navigation-map" />
        <map name="navigation-map">
          {/* Erreur : Zone sans alt */}
          <area shape="rect" coords="0,0,100,50" href="/home" />
          
          {/* Erreur : Zone avec alt vide */}
          <area shape="rect" coords="100,0,200,50" href="/about" alt="" />
        </map>
      </div>
      
      {/* Test 1.1.3 - Boutons image sans alternatives */}
      <div>
        <h2>Boutons &lt;input type="image" /&gt; sans alternatives</h2>
        {/* Erreur : Bouton image sans alt */}
        <input type="image" src="submit.png" />
        
        {/* Erreur : Bouton image avec alt vide */}
        <input type="image" src="search.png" alt="" />
      </div>
      
      {/* Test 1.1.5 - Images vectorielles svg sans alternatives */}
      <div>
        <h2>Images vectorielles &lt;svg&gt; sans alternatives</h2>
        {/* Erreur : SVG sans role="img" */}
        <svg>
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        
        {/* Erreur : SVG avec role="img" mais sans alternative */}
        <svg role="img">
          <rect width="100" height="50" fill="blue" />
        </svg>
      </div>
      
      {/* Test 1.1.6 - Images objet object sans alternatives */}
      <div>
        <h2>Images objet &lt;object /&gt; sans alternatives</h2>
        {/* Erreur : Object sans role="img" */}
        <object type="image/svg+xml" data="diagram.svg" />
        
        {/* Erreur : Object avec role="img" mais sans alternative */}
        <object type="image/png" data="chart.png" role="img" />
      </div>
      
      {/* Test 1.1.7 - Images embarquées embed sans alternatives */}
      <div>
        <h2>Images embarquées &lt;embed /&gt; sans alternatives</h2>
        {/* Erreur : Embed sans role="img" */}
        <embed type="image/svg+xml" src="icon.svg" />
        
        {/* Erreur : Embed avec role="img" mais sans alternative */}
        <embed type="image/png" src="logo.png" role="img" />
      </div>
      
      {/* Test 1.1.8 - Images bitmap canvas sans alternatives */}
      <div>
        <h2>Images bitmap &lt;canvas&gt; sans alternatives</h2>
        {/* Erreur : Canvas sans role="img" et sans contenu alternatif */}
        <canvas></canvas>
        
        {/* Erreur : Canvas avec role="img" mais sans alternative */}
        <canvas width="200" height="100" role="img"></canvas>
      </div>
    </div>
  );
};

export default ExampleRGAA1_1WithIssues;