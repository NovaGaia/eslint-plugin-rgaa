// Test 1.1.1 - Éléments avec role="img" et alternatives textuelles valides
const Test1_1_RoleImgValidAlternatives = () => {
  return (
    <div>
      {/* Élément avec role="img" et aria-label - OK */}
      <div role="img" aria-label="Logo de l'entreprise avec un design moderne et professionnel" style={{backgroundImage: 'url(logo.png)'}}>
        Contenu décoratif
      </div>
      
      {/* Élément avec role="img" et aria-labelledby + aria-label - OK */}
      <div role="img" aria-label="Logo de l'entreprise avec un design moderne et professionnel" aria-labelledby="logo-title" style={{backgroundImage: 'url(logo.png)'}}>
        Contenu décoratif
      </div>
      <span id="logo-title">Logo de l'entreprise avec un design moderne et professionnel</span>
    </div>
  );
};

export default Test1_1_RoleImgValidAlternatives;

