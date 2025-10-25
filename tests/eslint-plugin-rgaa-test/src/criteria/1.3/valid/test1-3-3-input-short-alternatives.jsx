// Test 1.3.3 - Boutons <input type="image"> avec alternatives courtes
const Test1_3_3_InputShortAlternatives = () => {
  return (
    <div>
      {/* Input avec alt long - OK */}
      <input type="image" src="submit.png" alt="Envoyer le formulaire de contact avec validation" />
      
      {/* Input avec title long - OK */}
      <input type="image" src="cancel.png" title="Annuler l'opération en cours et revenir à l'écran précédent" />
      
      {/* Input avec aria-label long - OK */}
      <input type="image" src="search.png" aria-label="Lancer une recherche dans la base de données" />
      
      {/* Input avec aria-labelledby + alt long - OK */}
      <input type="image" src="help.png" alt="Obtenir de l'aide et des informations détaillées" aria-labelledby="help-title" />
      <span id="help-title">Obtenir des informations détaillées sur cette fonctionnalité</span>
    </div>
  );
};

export default Test1_3_3_InputShortAlternatives;
