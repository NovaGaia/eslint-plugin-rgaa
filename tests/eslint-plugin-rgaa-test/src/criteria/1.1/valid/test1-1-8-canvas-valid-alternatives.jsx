// Test 1.1.8 - Images bitmap <canvas> avec alternatives textuelles valides
const Test1_8_CanvasValidAlternatives = () => {
  return (
    <div>
      {/* Canvas avec role="img" et aria-label - OK */}
      <canvas width="100" height="100" role="img" aria-label="Graphique généré dynamiquement avec des données en temps réel" />
      
      {/* Canvas avec role="img" et aria-labelledby + aria-label - OK */}
      <canvas width="100" height="100" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles" aria-labelledby="canvas-title" />
      <span id="canvas-title">Graphique généré dynamiquement avec des données en temps réel</span>
      
      {/* Canvas avec contenu alternatif - OK */}
      <canvas width="100" height="100" role="img" aria-label="Graphique généré dynamiquement avec des données en temps réel">
        <p>Graphique généré dynamiquement avec des données en temps réel</p>
      </canvas>
    </div>
  );
};

export default Test1_8_CanvasValidAlternatives;

