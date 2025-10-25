// Test 1.1.8 - Images bitmap <canvas> avec alternatives textuelles valides
const Test1_8_CanvasValidAlternatives = () => {
  return (
    <div>
      {/* Canvas avec role="img" et aria-label - OK */}
      <canvas width="100" height="100" role="img" aria-label="Graphique généré" />
      
      {/* Canvas avec role="img" et aria-labelledby - OK */}
      <canvas width="100" height="100" role="img" aria-labelledby="canvas-title" />
      <span id="canvas-title">Graphique généré</span>
      
      {/* Canvas avec contenu alternatif - OK */}
      <canvas width="100" height="100">
        <p>Graphique généré dynamiquement</p>
      </canvas>
    </div>
  );
};

export default Test1_8_CanvasValidAlternatives;

