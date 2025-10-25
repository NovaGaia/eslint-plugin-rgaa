// Test 1.3.5 - Images <embed> avec alternatives courtes
const Test1_3_5_EmbedShortAlternatives = () => {
  return (
    <div>
      {/* Embed avec aria-label long - OK */}
      <embed type="image/png" src="banner.png" role="img" aria-label="Bannière publicitaire pour promouvoir nos nouveaux produits" />
      
      {/* Embed avec title long - OK */}
      <embed type="image/jpeg" src="photo.jpg" role="img" title="Photographie d'un paysage montagneux avec des arbres" />
      
      {/* Embed avec aria-labelledby + aria-label long - OK */}
      <embed type="image/svg" src="icon.svg" role="img" aria-label="Icône vectorielle représentant un menu de navigation" aria-labelledby="embed-title" />
      <span id="embed-title">Icône représentant un menu de navigation avec plusieurs options</span>
    </div>
  );
};

export default Test1_3_5_EmbedShortAlternatives;
