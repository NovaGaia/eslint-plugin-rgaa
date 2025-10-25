// Test 1.3.7 - Images <canvas> avec alternatives courtes
const Test1_3_7_CanvasShortAlternatives = () => {
  return (
    <div>
      {/* Canvas avec aria-label long - OK */}
      <canvas width="100" height="100" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles avec des données détaillées" />
      
      {/* Canvas avec aria-labelledby + aria-label long - OK */}
      <canvas width="100" height="100" role="img" aria-label="Graphique généré dynamiquement avec des données en temps réel" aria-labelledby="canvas-title" />
      <span id="canvas-title">Dessin représentant un diagramme de flux de données complexe</span>
      
      {/* Canvas avec contenu alternatif long - OK */}
      <canvas width="100" height="100" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles avec des données détaillées">
        <p>Graphique représentant l'évolution des ventes mensuelles avec des données détaillées</p>
      </canvas>
    </div>
  );
};

export default Test1_3_7_CanvasShortAlternatives;
