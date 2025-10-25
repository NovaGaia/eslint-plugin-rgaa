// Test 1.1.7 - Images embarquées <embed type="image/..."> avec alternatives textuelles valides
const Test1_7_EmbedValidAlternatives = () => {
  return (
    <div>
      {/* Embed avec role="img" et aria-label - OK */}
      <embed src="image.png" type="image/png" role="img" aria-label="Image PNG représentant un diagramme de flux" />
      
      {/* Embed avec role="img" et aria-labelledby + aria-label - OK */}
      <embed src="image.png" type="image/png" role="img" aria-label="Image PNG représentant un diagramme de flux de données" aria-labelledby="embed-title" />
      <span id="embed-title">Image PNG représentant un diagramme de flux</span>
      
      {/* Embed avec role="img" et title - OK */}
      <embed src="image.png" type="image/png" role="img" title="Image PNG représentant un diagramme de flux" />
    </div>
  );
};

export default Test1_7_EmbedValidAlternatives;

