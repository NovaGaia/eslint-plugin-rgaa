// RGAA 1.3 - Exemples avec problèmes (alternatives trop longues)
import React from 'react';

const RGAA1_3IssuesExamples = () => {
  return (
    <div>
      <h1>RGAA 1.3 - Alternatives textuelles courtes (Problèmes)</h1>
      
      {/* Test 1.3.1 - Images <img> avec alternatives courtes */}
      <section>
        <h2>Images &lt;img /&gt; avec alternatives courtes</h2>
        <img src="logo.png" alt="Logo" />
        <img src="icon.png" title="Menu" />
        <img src="photo.jpg" aria-label="Photo" />
        <img src="chart.png" alt="Graphique" aria-labelledby="chart-title" />
        <span id="chart-title">Graphique</span>
      </section>

      {/* Test 1.3.1 - Images <img> avec alternatives courtes */}
      <section>
        <h2>Images &lt;img /&gt; avec alternatives courtes</h2>
        <img src="logo.png" alt="Logo" />
        <img src="chart.png" alt="Graphique" aria-labelledby="chart-title" />
        <span id="chart-title">Graphique</span>
      </section>

      {/* Test 1.3.2 - Éléments avec role="img" */}
      <section>
        <h2>Éléments avec role="img" - alternatives courtes</h2>
        <div role="img" aria-label="Icône" />
        <span role="img" aria-label="Menu" aria-labelledby="icon-title" />
        <span id="icon-title">Menu</span>
        <button role="img" aria-label="Bouton" />
      </section>

      {/* Test 1.3.3 - Zones <area> */}
      <section>
        <h2>Zones &lt;area /&gt; avec alternatives courtes</h2>
        <map name="imagemap">
          <area shape="rect" coords="0,0,100,100" href="#" alt="Zone 1" />
          <area shape="circle" coords="50,50,25" href="#" aria-label="Zone 2" />
          <area shape="poly" coords="0,0,50,0,25,50" href="#" alt="Zone 3" aria-labelledby="area-title" />
          <span id="area-title">Zone 3</span>
        </map>
      </section>

      {/* Test 1.3.3 - Boutons <input type="image"> */}
      <section>
        <h2>Boutons &lt;input type="image" /&gt; - alternatives courtes</h2>
        <input type="image" src="submit.png" alt="Envoyer" />
        <input type="image" src="cancel.png" title="Annuler" />
        <input type="image" src="search.png" aria-label="Rechercher" />
        <input type="image" src="help.png" alt="Aide" aria-labelledby="help-title" />
        <span id="help-title">Aide</span>
      </section>

      {/* Test 1.3.4 - Images <object> */}
      <section>
        <h2>Images &lt;object /&gt; - alternatives courtes</h2>
        <object type="image/png" data="chart.png" role="img" aria-label="Graphique" />
        <object type="image/jpeg" data="photo.jpg" role="img" title="Photo" />
        <object type="image/svg" data="icon.svg" role="img" aria-label="Icône" aria-labelledby="object-title" />
        <span id="object-title">Icône</span>
      </section>

      {/* Test 1.3.5 - Images <embed> */}
      <section>
        <h2>Images &lt;embed /&gt; - alternatives courtes</h2>
        <embed type="image/png" src="banner.png" role="img" aria-label="Bannière" />
        <embed type="image/jpeg" src="photo.jpg" role="img" title="Photo" />
        <embed type="image/svg" src="icon.svg" role="img" aria-label="Icône" aria-labelledby="embed-title" />
        <span id="embed-title">Icône</span>
      </section>

      {/* Test 1.3.6 - Images <svg> */}
      <section>
        <h2>Images &lt;svg&gt; - alternatives courtes</h2>
        <svg width="100" height="100" role="img" aria-label="Graphique">
          <circle cx="50" cy="50" r="40" fill="red" />
        </svg>
        <svg width="100" height="100" role="img">
          <title>Icône</title>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
        <svg width="100" height="100" role="img" aria-label="Triangle" aria-labelledby="svg-title">
          <polygon points="50,10 90,90 10,90" fill="green" />
        </svg>
        <span id="svg-title">Triangle</span>
      </section>

      {/* Test 1.3.7 - Images <canvas> */}
      <section>
        <h2>Images &lt;canvas&gt; - alternatives courtes</h2>
        <canvas width="100" height="100" role="img" aria-label="Graphique" />
        <canvas width="100" height="100" role="img" aria-label="Dessin" aria-labelledby="canvas-title" />
        <span id="canvas-title">Dessin</span>
        <canvas width="100" height="100">
          <p>Graphique</p>
        </canvas>
      </section>
    </div>
  );
};

export default RGAA1_3IssuesExamples;
