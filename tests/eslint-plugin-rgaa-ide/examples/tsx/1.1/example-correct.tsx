import React from 'react';

// Exemples RGAA 1.1 - Images porteuses d'information (CORRECTES)
const ExampleRGAA1_1Correct: React.FC = () => {
  return (
    <div>
      <h1>RGAA 1.1 - Images porteuses d'information (CORRECTES)</h1>
      
      {/* Test 1.1.1 - Images img avec alternatives */}
      <div>
        <h2>Images img avec alternatives</h2>
        <img src="logo.png" alt="Logo de l'entreprise" />
        <img src="chart.png" alt="Graphique des ventes" aria-label="Graphique des ventes" />
        <img src="profile.jpg" alt="" aria-labelledby="profile-desc" />
        <img src="banner.jpg" title="Bannière promotionnelle" />
        
        {/* Image décorative correcte */}
        <img src="decoration.png" alt="" role="presentation" />
      </div>
      
      {/* Test 1.1.2 - Zones area avec alternatives */}
      <div>
        <h2>Zones area avec alternatives</h2>
        <map name="navigation-map">
          <area shape="rect" coords="0,0,100,50" href="/home" alt="Accueil" />
          <area shape="rect" coords="100,0,200,50" href="/about" aria-label="À propos" />
        </map>
      </div>
      
      {/* Test 1.1.3 - Boutons image <input type="image"> */}
      <div>
        <h2>Boutons image</h2>
        <input type="image" src="submit.png" alt="Envoyer le formulaire" />
        <input type="image" src="search.png" aria-label="Rechercher" />
      </div>
      
      {/* Test 1.1.5 - Images vectorielles svg */}
      <div>
        <h2>Images vectorielles svg</h2>
        <svg role="img" aria-label="Icône de notification">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        <svg role="img" aria-labelledby="chart-title">
          <title id="chart-title">Graphique en barres</title>
          <rect width="100" height="50" fill="blue" />
        </svg>
      </div>
      
      {/* Test 1.1.6 - Images objet object */}
      <div>
        <h2>Images objet object</h2>
        <object type="image/svg+xml" data="diagram.svg" role="img" aria-label="Diagramme de flux" />
        <object type="image/png" data="chart.png" role="img" title="Graphique des données" />
      </div>
      
      {/* Test 1.1.7 - Images embarquées embed */}
      <div>
        <h2>Images embarquées embed</h2>
        <embed type="image/svg+xml" src="icon.svg" role="img" aria-label="Icône" />
        <embed type="image/png" src="logo.png" role="img" title="Logo" />
      </div>
      
      {/* Test 1.1.8 - Images bitmap canvas */}
      <div>
        <h2>Images bitmap canvas</h2>
        <canvas role="img" aria-label="Graphique généré dynamiquement">
          {/* Contenu généré par JavaScript */}
        </canvas>
        <canvas width="200" height="100" role="img" aria-labelledby="canvas-desc">
          <div id="canvas-desc">Graphique des performances</div>
        </canvas>
      </div>
    </div>
  );
};

export default ExampleRGAA1_1Correct;
