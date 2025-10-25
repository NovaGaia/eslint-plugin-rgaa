// Test 1.3.6 - Images <svg> avec alternatives trop longues
const Test1_3_6_SvgLongAlternatives = () => {
  return (
    <div>
      {/* SVG avec aria-label trop court - ATTENTION */}
      <svg width="100" height="100" role="img" aria-label="Graphique">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG avec title trop court - ATTENTION */}
      <svg width="100" height="100" role="img">
        <title>Icône</title>
        <rect x="10" y="10" width="80" height="80" fill="blue" />
      </svg>
      
      {/* SVG avec aria-labelledby trop court - ATTENTION */}
      <svg width="100" height="100" role="img" aria-labelledby="svg-title">
        <polygon points="50,10 90,90 10,90" fill="green" />
      </svg>
      <span id="svg-title">Triangle</span>
    </div>
  );
};

export default Test1_3_6_SvgLongAlternatives;
