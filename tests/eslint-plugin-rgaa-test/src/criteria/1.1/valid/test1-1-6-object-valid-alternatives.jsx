// Test 1.1.6 - Images objet <object type="image/..."> avec alternatives textuelles valides
const Test1_6_ObjectValidAlternatives = () => {
  return (
    <div>
      {/* Object avec role="img" et aria-label - OK */}
      <object data="image.svg" type="image/svg+xml" role="img" aria-label="Graphique SVG" />
      
      {/* Object avec role="img" et aria-labelledby - OK */}
      <object data="image.svg" type="image/svg+xml" role="img" aria-labelledby="object-title" />
      <span id="object-title">Graphique SVG</span>
      
      {/* Object avec role="img" et title - OK */}
      <object data="image.svg" type="image/svg+xml" role="img" title="Graphique SVG" />
    </div>
  );
};

export default Test1_6_ObjectValidAlternatives;

