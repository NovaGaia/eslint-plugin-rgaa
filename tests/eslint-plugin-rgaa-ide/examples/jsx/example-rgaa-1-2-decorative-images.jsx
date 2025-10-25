import React from 'react';

// Exemples RGAA 1.2 - Images de décoration
const ExampleRGAA1_2DecorativeImages = () => {
  return (
    <div>
      <h1>RGAA 1.2 - Images de décoration</h1>
      
      {/* ===== EXEMPLES VALIDES ===== */}
      <section>
        <h2>✅ Exemples valides</h2>
        
        {/* Test 1.2.1 - Images <img> décoratives */}
        <div>
          <h3>Images <img> décoratives correctement marquées</h3>
          <img src="decoration.png" alt="" />
          <img src="separator.png" alt="" role="presentation" />
          <img src="banner.jpg" alt="" aria-hidden="true" />
          <img src="icon.svg" role="presentation" />
          <img src="pattern.jpg" role="none" />
        </div>
        
        {/* Test 1.2.2 - Zones <area> décoratives */}
        <div>
          <h3>Zones <area> décoratives (sans href)</h3>
          <map name="decorative-map">
            <area shape="rect" coords="0,0,100,100" alt="" />
            <area shape="circle" coords="50,50,25" aria-hidden="true" />
            <area shape="poly" coords="0,0,50,0,25,50" role="presentation" />
            <area shape="rect" coords="100,100,200,200" role="none" />
          </map>
        </div>
        
        {/* Test 1.2.3 - Images objet <object> décoratives */}
        <div>
          <h3>Images objet <object> décoratives</h3>
          <object type="image/svg+xml" data="decoration.svg" aria-hidden="true"></object>
          <object type="image/png" data="separator.png" aria-hidden="true"></object>
        </div>
        
        {/* Test 1.2.4 - Images vectorielles <svg> décoratives */}
        <div>
          <h3>Images vectorielles <svg> décoratives</h3>
          <svg aria-hidden="true">
            <circle cx="50" cy="50" r="40" fill="red" />
          </svg>
          <svg aria-hidden="true">
            <title></title>
            <desc></desc>
            <rect width="100" height="100" fill="blue" />
          </svg>
        </div>
        
        {/* Test 1.2.5 - Images bitmap <canvas> décoratives */}
        <div>
          <h3>Images bitmap <canvas> décoratives</h3>
          <canvas aria-hidden="true"></canvas>
          <canvas width="100" height="100" aria-hidden="true"></canvas>
        </div>
        
        {/* Test 1.2.6 - Images embarquées <embed> décoratives */}
        <div>
          <h3>Images embarquées <embed> décoratives</h3>
          <embed type="image/svg+xml" src="decoration.svg" aria-hidden="true" />
          <embed type="image/png" src="separator.png" aria-hidden="true" />
        </div>
      </section>
      
      {/* ===== EXEMPLES INVALIDES ===== */}
      <section>
        <h2>❌ Exemples invalides (avec erreurs RGAA 1.2)</h2>
        
        {/* Test 1.2.1 - Images <img> décoratives mal marquées */}
        <div>
          <h3>Images <img> décoratives mal marquées</h3>
          {/* Erreur : Image décorative sans marquage */}
          <img src="decoration.png" />
          
          {/* Erreur : Image décorative avec attributs d'alternative */}
          <img src="separator.png" alt="" aria-label="Séparateur" />
          <img src="banner.jpg" alt="" title="Bannière" />
        </div>
        
        {/* Test 1.2.2 - Zones <area> décoratives mal marquées */}
        <div>
          <h3>Zones <area> décoratives mal marquées</h3>
          <map name="decorative-map-invalid">
            {/* Erreur : Zone décorative sans marquage */}
            <area shape="rect" coords="0,0,100,100" />
            
            {/* Erreur : Zone décorative avec attributs d'alternative */}
            <area shape="circle" coords="50,50,25" alt="" aria-label="Zone décorative" />
          </map>
        </div>
        
        {/* Test 1.2.3 - Images objet <object> décoratives mal marquées */}
        <div>
          <h3>Images objet <object> décoratives mal marquées</h3>
          {/* Erreur : Objet décoratif sans aria-hidden="true" */}
          <object type="image/svg+xml" data="decoration.svg"></object>
          
          {/* Erreur : Objet décoratif avec attributs d'alternative */}
          <object type="image/png" data="separator.png" aria-hidden="true" aria-label="Séparateur"></object>
          
          {/* Erreur : Objet décoratif avec contenu alternatif */}
          <object type="image/jpg" data="banner.jpg" aria-hidden="true">
            Contenu alternatif
          </object>
        </div>
        
        {/* Test 1.2.4 - Images vectorielles <svg> décoratives mal marquées */}
        <div>
          <h3>Images vectorielles <svg> décoratives mal marquées</h3>
          {/* Erreur : SVG décoratif sans aria-hidden="true" */}
          <svg>
            <circle cx="50" cy="50" r="40" fill="red" />
          </svg>
          
          {/* Erreur : SVG décoratif avec attributs d'alternative */}
          <svg aria-hidden="true" aria-label="Décoration">
            <rect width="100" height="100" fill="blue" />
          </svg>
          
          {/* Erreur : SVG décoratif avec éléments title/desc */}
          <svg aria-hidden="true">
            <title>Décoration</title>
            <circle cx="50" cy="50" r="40" fill="green" />
          </svg>
          
          {/* Erreur : SVG décoratif avec attributs title */}
          <svg aria-hidden="true" title="Décoration">
            <path d="M10 10 L20 20" stroke="black" />
          </svg>
        </div>
        
        {/* Test 1.2.5 - Images bitmap <canvas> décoratives mal marquées */}
        <div>
          <h3>Images bitmap <canvas> décoratives mal marquées</h3>
          {/* Erreur : Canvas décoratif sans aria-hidden="true" */}
          <canvas></canvas>
          
          {/* Erreur : Canvas décoratif avec attributs d'alternative */}
          <canvas aria-hidden="true" aria-label="Décoration"></canvas>
          
          {/* Erreur : Canvas décoratif avec contenu alternatif */}
          <canvas aria-hidden="true">
            Contenu alternatif
          </canvas>
        </div>
        
        {/* Test 1.2.6 - Images embarquées <embed> décoratives mal marquées */}
        <div>
          <h3>Images embarquées <embed> décoratives mal marquées</h3>
          {/* Erreur : Embed décoratif sans aria-hidden="true" */}
          <embed type="image/svg+xml" src="decoration.svg" />
          
          {/* Erreur : Embed décoratif avec attributs d'alternative */}
          <embed type="image/png" src="separator.png" aria-hidden="true" title="Séparateur" />
        </div>
      </section>
    </div>
  );
};

export default ExampleRGAA1_2DecorativeImages;
