import React from 'react';

// Exemples RGAA 1.2 - Images de décoration (AVEC ERREURS)
const ExampleRGAA1_2WithIssues = () => {
  return (
    <div>
      <h1>RGAA 1.2 - Images de décoration (AVEC ERREURS)</h1>
      
      {/* Test 1.2.1 - Images img décoratives mal marquées */}
      <div>
        <h2>Images &lt;img /&gt; décoratives mal marquées</h2>
        {/* Erreur : Image décorative sans marquage */}
        {/* eslint-rgaa: decorative */}
        <img src="decoration.png" />
        
        {/* Erreur : Image décorative avec attributs d'alternative */}
        {/* eslint-rgaa: decorative */}
        <img src="separator.png" alt="" aria-label="Séparateur" />
        {/* eslint-rgaa: decorative */}
        <img src="banner.jpg" alt="" title="Bannière" />
      </div>
      
      {/* Test 1.2.2 - Zones area décoratives mal marquées */}
      <div>
        <h2>Zones &lt;area /&gt; décoratives mal marquées</h2>
        <map name="decorative-map-invalid">
          {/* Erreur : Zone décorative sans marquage */}
          {/* eslint-rgaa: decorative */}
          <area shape="rect" coords="0,0,100,100" />
          
          {/* Erreur : Zone décorative avec attributs d'alternative */}
          {/* eslint-rgaa: decorative */}
          <area shape="circle" coords="50,50,25" alt="" aria-label="Zone décorative" />
        </map>
      </div>
      
      {/* Test 1.2.3 - Images objet object décoratives mal marquées */}
      <div>
        <h2>Images objet &lt;object /&gt; décoratives mal marquées</h2>
        {/* Erreur : Objet décoratif sans aria-hidden="true" */}
        {/* eslint-rgaa: decorative */}
        <object type="image/svg+xml" data="decoration.svg"></object>
        
        {/* Erreur : Objet décoratif avec attributs d'alternative */}
        {/* eslint-rgaa: decorative */}
        <object type="image/png" data="separator.png" aria-hidden="true" aria-label="Séparateur"></object>
        
        {/* Erreur : Objet décoratif avec contenu alternatif */}
        {/* eslint-rgaa: decorative */}
        <object type="image/jpg" data="banner.jpg" aria-hidden="true">
          Contenu alternatif
        </object>
      </div>
      
      {/* Test 1.2.4 - Images vectorielles svg décoratives mal marquées */}
      <div>
        <h2>Images vectorielles &lt;svg&gt; décoratives mal marquées</h2>
        {/* Erreur : SVG décoratif sans aria-hidden="true" */}
        {/* eslint-rgaa: decorative */}
        <svg>
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        
        {/* Erreur : SVG décoratif avec attributs d'alternative */}
        {/* eslint-rgaa: decorative */}
        <svg aria-hidden="true" aria-label="Décoration">
          <rect width="100" height="100" fill="blue" />
        </svg>
        
        {/* Erreur : SVG décoratif avec éléments title/desc */}
        {/* eslint-rgaa: decorative */}
        <svg aria-hidden="true">
          <title>Décoration</title>
          <circle cx="50" cy="50" r="40" fill="green" />
        </svg>
        
        {/* Erreur : SVG décoratif avec balise title */}
        {/* eslint-rgaa: decorative */}
        <svg aria-hidden="true">
          <title>Décoration</title>
          <path d="M10 10 L20 20" stroke="black" />
        </svg>
      </div>
      
      {/* Test 1.2.5 - Images bitmap canvas décoratives mal marquées */}
      <div>
        <h2>Images bitmap &lt;canvas&gt; décoratives mal marquées</h2>
        {/* Erreur : Canvas décoratif sans aria-hidden="true" */}
        {/* eslint-rgaa: decorative */}
        <canvas></canvas>
        
        {/* Erreur : Canvas décoratif avec attributs d'alternative */}
        {/* eslint-rgaa: decorative */}
        <canvas aria-hidden="true" aria-label="Décoration"></canvas>
        
        {/* Erreur : Canvas décoratif avec contenu alternatif */}
        {/* eslint-rgaa: decorative */}
        <canvas aria-hidden="true">
          Contenu alternatif
        </canvas>
      </div>
      
      {/* Test 1.2.6 - Images embarquées embed décoratives mal marquées */}
      <div>
        <h2>Images embarquées &lt;embed /&gt; décoratives mal marquées</h2>
        {/* Erreur : Embed décoratif sans aria-hidden="true" */}
        {/* eslint-rgaa: decorative */}
        <embed type="image/svg+xml" src="decoration.svg" />
        
        {/* Erreur : Embed décoratif avec attributs d'alternative */}
        {/* eslint-rgaa: decorative */}
        <embed type="image/png" src="separator.png" aria-hidden="true" title="Séparateur" />
      </div>
    </div>
  );
};

export default ExampleRGAA1_2WithIssues;