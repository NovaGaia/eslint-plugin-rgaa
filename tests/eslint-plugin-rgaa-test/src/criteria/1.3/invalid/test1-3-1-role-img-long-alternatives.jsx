// Test 1.3.1 - Éléments avec role="img" et alternatives trop longues
const Test1_3_1_RoleImgLongAlternatives = () => {
  return (
    <div>
      {/* Div avec role="img" et aria-label trop court - ATTENTION */}
      <div role="img" aria-label="Icône" />
      
      {/* Span avec role="img" et aria-labelledby trop court - ATTENTION */}
      <span role="img" aria-labelledby="icon-title" />
      <span id="icon-title">Menu</span>
      
      {/* Élément avec role="img" et aria-label trop court - ATTENTION */}
      <button role="img" aria-label="Bouton" />
    </div>
  );
};

export default Test1_3_1_RoleImgLongAlternatives;
