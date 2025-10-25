// Test 1.3.7 - Images <canvas> avec alternatives trop longues
const Test1_3_7_CanvasLongAlternatives = () => {
  return (
    <div>
      {/* Canvas avec aria-label trop court - ATTENTION */}
      <canvas width="100" height="100" role="img" aria-label="Graphique" />
      
      {/* Canvas avec aria-labelledby trop court - ATTENTION */}
      <canvas width="100" height="100" role="img" aria-labelledby="canvas-title" />
      <span id="canvas-title">Dessin</span>
      
      {/* Canvas avec contenu alternatif trop court - ATTENTION */}
      <canvas width="100" height="100">
        <p>Graphique</p>
      </canvas>
    </div>
  );
};

export default Test1_3_7_CanvasLongAlternatives;
