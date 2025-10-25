import React from 'react';

/**
 * Exemple complet testant tous les types d'images RGAA 1.1
 * 
 * Ce fichier contient des exemples de tous les types d'images couverts par le critère RGAA 1.1 :
 * - Test 1: Images <img> et éléments avec role="img"
 * - Test 2: Zones d'images réactives <area>
 * - Test 3: Boutons de type image <input type="image">
 * - Test 4: Images réactives côté serveur <img ismap>
 * - Test 5: Images vectorielles <svg>
 * - Test 6: Images objet <object type="image/...">
 * - Test 7: Images embarquées <embed type="image/...">
 * - Test 8: Images bitmap <canvas>
 */

const ExampleAllImageTypes: React.FC = () => {
  return (
    <div>
      <h1>Exemples de tous les types d'images RGAA 1.1</h1>
      
      {/* Test 1.1.1 - Images <img> et role="img" */}
      <section>
        <h2>Test 1.1.1 - Images &lt;img&gt; et role="img"</h2>
        
        {/* Image sans alternative - ERREUR */}
        <img src="logo.png" />
        
        {/* Image avec alt vide - ERREUR */}
        <img src="logo.png" alt="" />
        
        {/* Image avec alt valide - OK */}
        <img src="logo.png" alt="Logo de l'entreprise" />
        
        {/* Image avec aria-label - OK */}
        <img src="logo.png" aria-label="Logo de l'entreprise" />
        
        {/* Image avec aria-labelledby - OK */}
        <img src="logo.png" aria-labelledby="logo-title" />
        <span id="logo-title">Logo de l'entreprise</span>
        
        {/* Image avec title - OK */}
        <img src="logo.png" title="Logo de l'entreprise" />
        
        {/* Élément avec role="img" sans alternative - ERREUR */}
        <div role="img" style={{backgroundImage: 'url(logo.png)'}}>
          Contenu décoratif
        </div>
        
        {/* Élément avec role="img" avec aria-label - OK */}
        <div role="img" aria-label="Logo de l'entreprise" style={{backgroundImage: 'url(logo.png)'}}>
          Contenu décoratif
        </div>
      </section>
      
      {/* Test 1.1.2 - Zones d'images réactives <area> */}
      <section>
        <h2>Test 1.1.2 - Zones d'images réactives &lt;area&gt;</h2>
        
        <map name="imagemap">
          {/* Zone sans alternative - ERREUR */}
          <area shape="rect" coords="0,0,100,100" href="#section1" />
          
          {/* Zone avec alt vide - ERREUR */}
          <area shape="rect" coords="0,0,100,100" href="#section1" alt="" />
          
          {/* Zone avec alt valide - OK */}
          <area shape="rect" coords="0,0,100,100" href="#section1" alt="Section 1" />
          
          {/* Zone avec aria-label - OK */}
          <area shape="rect" coords="0,0,100,100" href="#section1" aria-label="Section 1" />
        </map>
        <img src="imagemap.png" usemap="#imagemap" alt="Plan du site" />
      </section>
      
      {/* Test 1.1.3 - Boutons de type image <input type="image"> */}
      <section>
        <h2>Test 1.1.3 - Boutons de type image &lt;input type="image"&gt;</h2>
        
        {/* Bouton sans alternative - ERREUR */}
        <input type="image" src="submit.png" />
        
        {/* Bouton avec alt vide - ERREUR */}
        <input type="image" src="submit.png" alt="" />
        
        {/* Bouton avec alt valide - OK */}
        <input type="image" src="submit.png" alt="Envoyer le formulaire" />
        
        {/* Bouton avec aria-label - OK */}
        <input type="image" src="submit.png" aria-label="Envoyer le formulaire" />
        
        {/* Bouton avec aria-labelledby - OK */}
        <input type="image" src="submit.png" aria-labelledby="submit-title" />
        <span id="submit-title">Envoyer le formulaire</span>
        
        {/* Bouton avec title - OK */}
        <input type="image" src="submit.png" title="Envoyer le formulaire" />
      </section>
      
      {/* Test 1.1.4 - Images réactives côté serveur <img ismap> */}
      <section>
        <h2>Test 1.1.4 - Images réactives côté serveur &lt;img ismap&gt;</h2>
        
        {/* Image ismap sans liens adjacents - ERREUR */}
        <img src="server-map.png" ismap alt="Plan du site" />
        
        {/* Image ismap avec liens adjacents - OK */}
        <img src="server-map.png" ismap alt="Plan du site" />
        <div>
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
        </div>
      </section>
      
      {/* Test 1.1.5 - Images vectorielles <svg> */}
      <section>
        <h2>Test 1.1.5 - Images vectorielles &lt;svg&gt;</h2>
        
        {/* SVG sans role="img" - ERREUR */}
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        
        {/* SVG avec role="img" mais sans alternative - ERREUR */}
        <svg width="100" height="100" role="img">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        
        {/* SVG avec role="img" et title - OK */}
        <svg width="100" height="100" role="img">
          <title>Graphique en cercle rouge</title>
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        
        {/* SVG avec role="img" et aria-label - OK */}
        <svg width="100" height="100" role="img" aria-label="Graphique en cercle rouge">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        
        {/* SVG avec role="img" et aria-labelledby - OK */}
        <svg width="100" height="100" role="img" aria-labelledby="chart-title">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        <span id="chart-title">Graphique en cercle rouge</span>
      </section>
      
      {/* Test 1.1.6 - Images objet <object type="image/..."> */}
      <section>
        <h2>Test 1.1.6 - Images objet &lt;object type="image/..."&gt;</h2>
        
        {/* Object sans role="img" - ERREUR */}
        <object data="image.svg" type="image/svg+xml" />
        
        {/* Object avec role="img" mais sans alternative - ERREUR */}
        <object data="image.svg" type="image/svg+xml" role="img" />
        
        {/* Object avec role="img" et aria-label - OK */}
        <object data="image.svg" type="image/svg+xml" role="img" aria-label="Graphique SVG" />
        
        {/* Object avec role="img" et aria-labelledby - OK */}
        <object data="image.svg" type="image/svg+xml" role="img" aria-labelledby="object-title" />
        <span id="object-title">Graphique SVG</span>
        
        {/* Object avec role="img" et title - OK */}
        <object data="image.svg" type="image/svg+xml" role="img" title="Graphique SVG" />
      </section>
      
      {/* Test 1.1.7 - Images embarquées <embed type="image/..."> */}
      <section>
        <h2>Test 1.1.7 - Images embarquées &lt;embed type="image/..."&gt;</h2>
        
        {/* Embed sans role="img" - ERREUR */}
        <embed src="image.png" type="image/png" />
        
        {/* Embed avec role="img" mais sans alternative - ERREUR */}
        <embed src="image.png" type="image/png" role="img" />
        
        {/* Embed avec role="img" et aria-label - OK */}
        <embed src="image.png" type="image/png" role="img" aria-label="Image PNG" />
        
        {/* Embed avec role="img" et aria-labelledby - OK */}
        <embed src="image.png" type="image/png" role="img" aria-labelledby="embed-title" />
        <span id="embed-title">Image PNG</span>
        
        {/* Embed avec role="img" et title - OK */}
        <embed src="image.png" type="image/png" role="img" title="Image PNG" />
      </section>
      
      {/* Test 1.1.8 - Images bitmap <canvas> */}
      <section>
        <h2>Test 1.1.8 - Images bitmap &lt;canvas&gt;</h2>
        
        {/* Canvas sans role="img" - ERREUR */}
        <canvas width="100" height="100" />
        
        {/* Canvas avec role="img" mais sans alternative - ERREUR */}
        <canvas width="100" height="100" role="img" />
        
        {/* Canvas avec role="img" et aria-label - OK */}
        <canvas width="100" height="100" role="img" aria-label="Graphique généré" />
        
        {/* Canvas avec role="img" et aria-labelledby - OK */}
        <canvas width="100" height="100" role="img" aria-labelledby="canvas-title" />
        <span id="canvas-title">Graphique généré</span>
        
        {/* Canvas avec contenu alternatif - OK */}
        <canvas width="100" height="100">
          <p>Graphique généré dynamiquement</p>
        </canvas>
      </section>
    </div>
  );
};

export default ExampleAllImageTypes;
