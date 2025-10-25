// Test 1.3.1 - Éléments avec role="img" et alternatives courtes
const Test1_3_1_RoleImgShortAlternatives = () => {
  return (
    <div>
      {/* Div avec role="img" et aria-label long - OK */}
      <div role="img" aria-label="Icône de menu de navigation principal avec plusieurs options disponibles" />
      
      {/* Span avec role="img" et aria-labelledby + aria-label long - OK */}
      <span role="img" aria-label="Icône de menu de navigation principal avec plusieurs options" aria-labelledby="icon-title" />
      <span id="icon-title">Menu de navigation principal avec plusieurs options disponibles</span>
      
      {/* Élément avec role="img" et aria-label long - OK */}
      <button role="img" aria-label="Bouton d'action principal pour lancer une opération complexe" />
    </div>
  );
};

export default Test1_3_1_RoleImgShortAlternatives;
