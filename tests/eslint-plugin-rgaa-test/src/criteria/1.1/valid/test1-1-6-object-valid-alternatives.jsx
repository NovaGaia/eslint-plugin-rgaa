// Test 1.1.6 - Images objet <object type="image/..."> avec alternatives textuelles valides
const Test1_6_ObjectValidAlternatives = () => {
  return (
    <div>
      {/* Object avec role="img" et aria-label - OK */}
      <object data="image.svg" type="image/svg+xml" role="img" aria-label="Graphique SVG représentant l'évolution des ventes mensuelles" />
      
      {/* Object avec role="img" et aria-labelledby + aria-label - OK */}
      <object data="image.svg" type="image/svg+xml" role="img" aria-label="Diagramme vectoriel représentant l'architecture du système" aria-labelledby="object-title" />
      <span id="object-title">Graphique SVG représentant l'évolution des ventes mensuelles</span>
      
      {/* Object avec role="img" et title - OK */}
      <object data="image.svg" type="image/svg+xml" role="img" title="Graphique SVG représentant l'évolution des ventes mensuelles" />
    </div>
  );
};

export default Test1_6_ObjectValidAlternatives;

