import React from 'react';

// Exemples RGAA 1.1 - Images porteuses d'information (CORRECTES)
const ExampleRGAA1_1Correct = () => {
  return (
    <div>
      <h1>RGAA 1.1 - Images porteuses d'information (CORRECTES)</h1>
      
      {/* Test 1.1.1 - Images img avec alternatives */}
      <div>
        <h2>Images &lt;img /&gt; avec alternatives</h2>
        <img src="logo.png" alt="Logo de l'entreprise avec un design moderne et professionnel" />
        <img src="chart.png" alt="Graphique des ventes mensuelles avec évolution positive" aria-label="Graphique des ventes mensuelles avec évolution positive" />
        <img src="profile.jpg" alt="Photo de profil utilisateur avec un sourire chaleureux" aria-labelledby="profile-desc" />
        <img src="banner.jpg" title="Bannière promotionnelle pour nos nouveaux produits" alt="Bannière promotionnelle pour nos nouveaux produits" />
        
        {/* Image décorative correctement marquée */}
        <img src="decoration.png" alt="" role="presentation" />
        
        {/* Image avec alt long - OK pour RGAA 1.1 */}
        <img src="detailed-chart.jpg" alt="Ceci est un graphique très détaillé qui montre l'évolution des ventes sur une période de 12 mois avec des données précises pour chaque mois et des analyses approfondies des tendances du marché" />
        
        {/* eslint-rgaa: decorative - Image décorative forcée par commentaire */}
        <img src="background-pattern.png" alt="" role="presentation" />
        
        {/* Image informative par défaut (pas de commentaire) */}
        <img src="chart.png" alt="Graphique des ventes mensuelles avec évolution positive" />
        
        {/* eslint-rgaa: ignore - Image legacy à corriger plus tard */}
        <img src="old-logo.png" alt="Logo legacy de l'ancienne version du site web" />
      </div>
      
      {/* Test 1.1.2 - Zones area avec alternatives */}
      <div>
        <h2>Zones &lt;area /&gt; avec alternatives</h2>
        <img src="navigation.png" alt="Plan de navigation principal du site web avec menu horizontal" useMap="#navigation-map" />
        <map name="navigation-map">
          <area shape="rect" coords="0,0,100,50" href="/home" alt="Accueil - Page d'accueil principale du site web" />
          <area shape="rect" coords="100,0,200,50" href="/about" aria-label="À propos - Informations détaillées sur notre entreprise" />
        </map>
      </div>
      
      {/* Test 1.1.3 - Boutons image input type="image" */}
      <div>
        <h2>Boutons &lt;input type="image" /&gt;</h2>
        <input type="image" src="submit.png" alt="Envoyer le formulaire de contact avec validation" />
        <input type="image" src="search.png" aria-label="Lancer une recherche dans la base de données" />
      </div>
      
      {/* Test 1.1.5 - Images vectorielles svg */}
      <div>
        <h2>Images vectorielles &lt;svg&gt;</h2>
        <svg role="img" aria-label="Icône de notification avec indicateur rouge">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        <svg role="img" aria-labelledby="chart-title" aria-label="Graphique en barres représentant les ventes mensuelles">
          <title id="chart-title">Graphique en barres représentant les ventes mensuelles</title>
          <rect width="100" height="50" fill="blue" />
        </svg>
      </div>
      
      {/* Test 1.1.6 - Images objet object */}
      <div>
        <h2>Images objet &lt;object /&gt;</h2>
        <object type="image/svg+xml" data="diagram.svg" role="img" aria-label="Diagramme de flux de données complexe" />
        <object type="image/png" data="chart.png" role="img" title="Graphique des données de ventes mensuelles" />
      </div>
      
      {/* Test 1.1.7 - Images embarquées embed */}
      <div>
        <h2>Images embarquées &lt;embed /&gt;</h2>
        <embed type="image/svg+xml" src="icon.svg" role="img" aria-label="Icône de menu de navigation principal" />
        <embed type="image/png" src="logo.png" role="img" title="Logo de l'entreprise avec design moderne" />
      </div>
      
      {/* Test 1.1.8 - Images bitmap canvas */}
      <div>
        <h2>Images bitmap &lt;canvas&gt;</h2>
        <canvas role="img" aria-label="Graphique généré dynamiquement">
          {/* Contenu généré par JavaScript */}
        </canvas>
        <canvas width="200" height="100" role="img" aria-labelledby="canvas-desc" aria-label="Graphique des performances">
          <div id="canvas-desc">Graphique des performances</div>
        </canvas>
      </div>
    </div>
  );
};

export default ExampleRGAA1_1Correct;