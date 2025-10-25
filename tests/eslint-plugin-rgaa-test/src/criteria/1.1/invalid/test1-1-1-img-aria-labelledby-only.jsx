// Test 1.1.1 - Images <img> avec aria-labelledby seul (génère un avertissement)
const Test1_1_ImgAriaLabelledByOnly = () => {
  return (
    <div>
      {/* Image avec aria-labelledby seul - ATTENTION */}
      <img src="logo.png" aria-labelledby="logo-title" />
      <span id="logo-title">Logo de l'entreprise avec un design moderne et professionnel</span>
      
      {/* Image avec aria-labelledby seul - ATTENTION */}
      <img src="icon.png" aria-labelledby="icon-title" />
      <span id="icon-title">Icône de menu de navigation</span>
    </div>
  );
};

export default Test1_1_ImgAriaLabelledByOnly;
