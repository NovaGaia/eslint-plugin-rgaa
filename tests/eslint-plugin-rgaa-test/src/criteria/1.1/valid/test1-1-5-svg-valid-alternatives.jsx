// Test 1.1.5 - Images vectorielles <svg> avec alternatives textuelles valides
const Test1_5_SvgValidAlternatives = () => {
  return (
    <div>
      {/* SVG avec role="img" et title - OK */}
      <svg width="100" height="100" role="img">
        <title>Graphique en cercle rouge</title>
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG avec role="img" et aria-label - OK */}
      <svg width="100" height="100" role="img" aria-label="Graphique en cercle rouge">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG avec role="img" et aria-labelledby + aria-label - OK */}
      <svg width="100" height="100" role="img" aria-label="Graphique vectoriel représentant l'évolution des ventes mensuelles" aria-labelledby="chart-title">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      <span id="chart-title">Graphique en cercle rouge</span>
    </div>
  );
};

export default Test1_5_SvgValidAlternatives;

