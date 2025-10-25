// Test 1.3.1 - Images <img> avec alternatives suffisamment longues et pertinentes
const Test1_3_1_ImgShortAlternatives = () => {
  return (
    <div>
      {/* Image avec alt suffisamment long - OK */}
      <img src="logo.png" alt="Logo de l'entreprise avec un design moderne et professionnel" />
      
      {/* Image avec title suffisamment long - OK */}
      <img src="icon.png" title="Icône de menu de navigation principal avec plusieurs options" />
      
      {/* Image avec aria-label suffisamment long - OK */}
      <img src="photo.jpg" aria-label="Photo de profil utilisateur avec un sourire chaleureux" />
      
      {/* Image avec aria-labelledby + alt suffisamment long - OK */}
      <img src="chart.png" alt="Graphique des ventes mensuelles avec évolution positive" aria-labelledby="chart-title" />
      <span id="chart-title">Graphique des ventes mensuelles avec évolution positive</span>
      
      {/* Image avec plusieurs alternatives suffisamment longues - OK */}
      <img src="banner.jpg" alt="Bannière publicitaire pour promouvoir nos nouveaux produits" title="Image promotionnelle avec design attractif" />
    </div>
  );
};

export default Test1_3_1_ImgShortAlternatives;
