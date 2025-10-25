// Test 1.3.3 - Boutons <input type="image"> avec alternatives trop longues
const Test1_3_3_InputLongAlternatives = () => {
  return (
    <div>
      {/* Input avec alt trop court - ATTENTION */}
      <input type="image" src="submit.png" alt="Envoyer" />
      
      {/* Input avec title trop court - ATTENTION */}
      <input type="image" src="cancel.png" title="Annuler" />
      
      {/* Input avec aria-label trop court - ATTENTION */}
      <input type="image" src="search.png" aria-label="Rechercher" />
      
      {/* Input avec aria-labelledby trop court - ATTENTION */}
      <input type="image" src="help.png" aria-labelledby="help-title" />
      <span id="help-title">Aide</span>
    </div>
  );
};

export default Test1_3_3_InputLongAlternatives;
