// Test 1.3.1 - Images <img> avec alternatives trop courtes
const Test1_3_1_ImgShortAlternatives = () => {
  return (
    <div>
      {/* Image avec alt trop court - ATTENTION */}
      <img src="logo.png" alt="Logo" />
      
      {/* Image avec title trop court - ATTENTION */}
      <img src="icon.png" title="Menu" />
      
      {/* Image avec aria-label trop court - ATTENTION */}
      <img src="photo.jpg" aria-label="Photo" />
      
      {/* Image avec aria-labelledby trop court - ATTENTION */}
      <img src="chart.png" aria-labelledby="chart-title" />
      <span id="chart-title">Graphique</span>
    </div>
  );
};

export default Test1_3_1_ImgShortAlternatives;