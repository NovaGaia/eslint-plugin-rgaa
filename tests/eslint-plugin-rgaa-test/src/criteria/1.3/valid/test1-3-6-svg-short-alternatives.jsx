// Test 1.3.6 - Images <svg> avec alternatives courtes
const Test1_3_6_SvgShortAlternatives = () => {
  return (
    <div>
      {/* SVG avec aria-label suffisamment long - OK */}
      <svg width="100" height="100" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles avec des données détaillées">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG avec title suffisamment long - OK */}
      <svg width="100" height="100" role="img" aria-label="Icône de menu de navigation principal avec plusieurs options disponibles">
        <title>Icône de menu de navigation principal avec plusieurs options disponibles</title>
        <rect x="10" y="10" width="80" height="80" fill="blue" />
      </svg>
      
      {/* SVG avec aria-labelledby + aria-label suffisamment long - OK */}
      <svg width="100" height="100" role="img" aria-label="Graphique vectoriel représentant l'évolution des ventes mensuelles" aria-labelledby="svg-title">
        <polygon points="50,10 90,90 10,90" fill="green" />
      </svg>
      <span id="svg-title">Triangle représentant un indicateur de direction pour la navigation</span>
    </div>
  );
};

export default Test1_3_6_SvgShortAlternatives;
