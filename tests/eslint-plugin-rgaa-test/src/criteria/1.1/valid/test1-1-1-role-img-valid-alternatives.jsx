// Test 1.1.1 - Éléments avec role="img" et alternatives textuelles valides
const Test1_1_RoleImgValidAlternatives = () => {
  return (
    <div>
      {/* Élément avec role="img" et aria-label - OK */}
      <div role="img" aria-label="Logo de l'entreprise" style={{backgroundImage: 'url(logo.png)'}}>
        Contenu décoratif
      </div>
      
      {/* Élément avec role="img" et aria-labelledby - OK */}
      <div role="img" aria-labelledby="logo-title" style={{backgroundImage: 'url(logo.png)'}}>
        Contenu décoratif
      </div>
      <span id="logo-title">Logo de l'entreprise</span>
    </div>
  );
};

export default Test1_1_RoleImgValidAlternatives;

