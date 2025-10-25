// RGAA 1.3 - Exemples corrects (alternatives courtes et pertinentes)
import React from 'react';

const RGAA1_3CorrectExamples = () => {
  return (
    <div>
      <h1>RGAA 1.3 - Alternatives textuelles pertinentes (Correct)</h1>
      
      {/* Test 1.3.1 - Images <img> avec alternatives longues */}
      <section>
        <h2>Images &lt;img /&gt; avec alternatives longues</h2>
        <img src="logo.png" alt="Logo de l'entreprise avec un design moderne et professionnel" />
        <img src="icon.png" title="Icône de menu de navigation principal avec plusieurs options" />
        <img src="photo.jpg" aria-label="Photo de profil utilisateur avec un sourire chaleureux" />
        <img src="chart.png" aria-labelledby="chart-title" alt="Graphique des ventes mensuelles avec évolution positive" />
        <span id="chart-title">Graphique des ventes mensuelles avec évolution positive</span>
      </section>

      {/* Test 1.3.1 - Éléments avec role="img" */}
      <section>
        <h2>Éléments avec role="img" - alternatives longues</h2>
        <div role="img" aria-label="Icône de menu de navigation principal avec plusieurs options" />
        <span role="img" aria-labelledby="icon-title" aria-label="Menu de navigation principal avec plusieurs options" />
        <span id="icon-title">Menu de navigation principal avec plusieurs options</span>
        <button role="img" aria-label="Bouton d'action principal pour lancer une opération" />
      </section>

      {/* Test 1.3.2 - Zones <area> */}
      <section>
        <h2>Zones &lt;area /&gt; avec alternatives longues</h2>
        <map name="imagemap">
          <area shape="rect" coords="0,0,100,100" href="#" alt="Zone de navigation vers la section des produits avec plusieurs options disponibles" />
          <area shape="circle" coords="50,50,25" href="#" aria-label="Zone de contact pour obtenir des informations détaillées" />
          <area shape="poly" coords="0,0,50,0,25,50" href="#" aria-labelledby="area-title" alt="Zone d'information sur l'entreprise et son histoire" />
          <span id="area-title">Zone d'information sur l'entreprise et son histoire</span>
        </map>
      </section>

      {/* Test 1.3.3 - Boutons <input type="image"> */}
      <section>
        <h2>Boutons &lt;input type="image" /&gt; - alternatives longues</h2>
        <input type="image" src="submit.png" alt="Envoyer le formulaire de contact avec validation" />
        <input type="image" src="cancel.png" title="Annuler l'opération en cours et revenir à l'écran précédent" />
        <input type="image" src="search.png" aria-label="Lancer une recherche dans la base de données" />
        <input type="image" src="help.png" aria-labelledby="help-title" alt="Obtenir des informations détaillées sur cette fonctionnalité" />
        <span id="help-title">Obtenir des informations détaillées sur cette fonctionnalité</span>
      </section>

      {/* Test 1.3.4 - Images <object> */}
      <section>
        <h2>Images &lt;object /&gt; - alternatives longues</h2>
        <object type="image/png" data="chart.png" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles" />
        <object type="image/jpeg" data="photo.jpg" role="img" title="Photographie d'un paysage montagneux avec des arbres" />
        <object type="image/svg" data="icon.svg" role="img" aria-labelledby="object-title" aria-label="Icône représentant un menu de navigation avec plusieurs options" />
        <span id="object-title">Icône représentant un menu de navigation avec plusieurs options</span>
      </section>

      {/* Test 1.3.5 - Images <embed> */}
      <section>
        <h2>Images &lt;embed /&gt; - alternatives longues</h2>
        <embed type="image/png" src="banner.png" role="img" aria-label="Bannière publicitaire pour promouvoir nos nouveaux produits" />
        <embed type="image/jpeg" src="photo.jpg" role="img" title="Photographie d'un paysage montagneux avec des arbres" />
        <embed type="image/svg" src="icon.svg" role="img" aria-labelledby="embed-title" aria-label="Icône représentant un menu de navigation avec plusieurs options" />
        <span id="embed-title">Icône représentant un menu de navigation avec plusieurs options</span>
      </section>

      {/* Test 1.3.6 - Images <svg> */}
      <section>
        <h2>Images &lt;svg&gt; - alternatives longues</h2>
        <svg width="100" height="100" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles avec des données détaillées">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        <svg width="100" height="100" role="img">
          <title>Icône de menu de navigation principal avec plusieurs options disponibles</title>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
        <svg width="100" height="100" role="img" aria-labelledby="svg-title" aria-label="Icône de menu de navigation principal avec plusieurs options">
          <polygon points="50,10 90,90 10,90" fill="green" />
        </svg>
        <span id="svg-title">Triangle représentant un indicateur de direction pour la navigation</span>
      </section>

      {/* Test 1.3.7 - Images <canvas> */}
      <section>
        <h2>Images &lt;canvas&gt; - alternatives longues</h2>
        <canvas width="100" height="100" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles avec des données détaillées" />
        <canvas width="100" height="100" role="img" aria-labelledby="canvas-title" aria-label="Dessin représentant un diagramme de flux de données complexe" />
        <span id="canvas-title">Dessin représentant un diagramme de flux de données complexe</span>
        <canvas width="100" height="100" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles avec des données détaillées">
          <p>Graphique représentant l'évolution des ventes mensuelles avec des données détaillées</p>
        </canvas>
      </section>
    </div>
  );
};

export default RGAA1_3CorrectExamples;
