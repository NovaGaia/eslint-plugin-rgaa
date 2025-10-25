// Test 1.1.3 - Boutons de type image <input type="image"> avec alternatives textuelles valides
const Test1_3_InputImageValidAlternatives = () => {
  return (
    <div>
      {/* Bouton avec alt valide - OK */}
      <input type="image" src="submit.png" alt="Envoyer le formulaire de contact avec validation" />
      
      {/* Bouton avec aria-label - OK */}
      <input type="image" src="submit.png" aria-label="Envoyer le formulaire de contact avec validation" />
      
      {/* Bouton avec aria-labelledby + alt - OK */}
      <input type="image" src="submit.png" alt="Envoyer le formulaire de contact avec validation" aria-labelledby="submit-title" />
      <span id="submit-title">Envoyer le formulaire de contact avec validation</span>
      
      {/* Bouton avec title - OK */}
      <input type="image" src="submit.png" title="Envoyer le formulaire de contact avec validation" />
    </div>
  );
};

export default Test1_3_InputImageValidAlternatives;

