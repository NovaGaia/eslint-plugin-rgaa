// Test 1.1.1 - Images <img> avec alternatives textuelles valides
const Test1_1_ImgValidAlternatives = () => {
  return (
    <div>
      {/* Image avec alt valide - OK */}
      <img src="logo.png" alt="Logo de l'entreprise avec un design moderne et professionnel" />
      
      {/* Image avec aria-label - OK */}
      <img src="logo.png" aria-label="Logo de l'entreprise avec un design moderne et professionnel" />
      
      {/* Image avec aria-labelledby + alt - OK */}
      <img src="logo.png" alt="Logo de l'entreprise avec un design moderne et professionnel" aria-labelledby="logo-title" />
      <span id="logo-title">Logo de l'entreprise avec un design moderne et professionnel</span>
      
      {/* Image avec title - OK */}
      <img src="logo.png" title="Logo de l'entreprise avec un design moderne et professionnel" />
      
      {/* Image avec aria-labelledby + aria-label - OK */}
      <img src="logo.png" aria-labelledby="logo-desc" aria-label="Description détaillée du logo de l'entreprise" />
      <span id="logo-desc">Description détaillée du logo de l'entreprise</span>
    </div>
  );
};

export default Test1_1_ImgValidAlternatives;

