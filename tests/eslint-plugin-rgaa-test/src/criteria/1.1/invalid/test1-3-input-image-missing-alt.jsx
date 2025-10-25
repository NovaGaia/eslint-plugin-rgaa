// Test 1.1.3 - Boutons de type image <input type="image"> sans alternative textuelle
const Test1_3_InputImageMissingAlt = () => {
  return (
    <div>
      {/* Bouton sans alternative - ERREUR */}
      <input type="image" src="submit.png" />
      
      {/* Bouton avec alt vide - ERREUR */}
      <input type="image" src="submit.png" alt="" />
      
      {/* Bouton avec alt contenant seulement des espaces - ERREUR */}
      <input type="image" src="submit.png" alt="   " />
      
      {/* Bouton avec aria-label vide - ERREUR */}
      <input type="image" src="submit.png" aria-label="" />
    </div>
  );
};

export default Test1_3_InputImageMissingAlt;

