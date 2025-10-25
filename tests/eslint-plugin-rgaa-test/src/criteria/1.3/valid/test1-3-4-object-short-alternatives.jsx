// Test 1.3.4 - Images <object> avec alternatives courtes
const Test1_3_4_ObjectShortAlternatives = () => {
  return (
    <div>
      {/* Object avec aria-label long - OK */}
      <object type="image/png" data="chart.png" role="img" aria-label="Graphique représentant l'évolution des ventes mensuelles" />
      
      {/* Object avec title long - OK */}
      <object type="image/jpeg" data="photo.jpg" role="img" title="Photographie d'un paysage montagneux avec des arbres" />
      
      {/* Object avec aria-labelledby + aria-label long - OK */}
      <object type="image/svg" data="icon.svg" role="img" aria-label="Icône vectorielle représentant un menu de navigation" aria-labelledby="object-title" />
      <span id="object-title">Icône représentant un menu de navigation avec plusieurs options</span>
    </div>
  );
};

export default Test1_3_4_ObjectShortAlternatives;
