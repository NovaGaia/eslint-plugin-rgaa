// Test 1.1.1 - Images <img> avec alternatives textuelles valides
const Test1_1_ImgValidAlternatives = () => {
  return (
    <div>
      {/* Image avec alt valide - OK */}
      <img src="logo.png" alt="Logo de l'entreprise" />
      
      {/* Image avec aria-label - OK */}
      <img src="logo.png" aria-label="Logo de l'entreprise" />
      
      {/* Image avec aria-labelledby - OK */}
      <img src="logo.png" aria-labelledby="logo-title" />
      <span id="logo-title">Logo de l'entreprise</span>
      
      {/* Image avec title - OK */}
      <img src="logo.png" title="Logo de l'entreprise" />
      
      {/* Image décorative avec alt vide - OK */}
      <img src="decoration.png" alt="" role="presentation" />
      
      {/* Image décorative avec role="none" - OK */}
      <img src="decoration.png" alt="" role="none" />
    </div>
  );
};

export default Test1_1_ImgValidAlternatives;

