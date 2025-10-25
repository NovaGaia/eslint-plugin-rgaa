// Test 1.1.1 - Éléments avec role="img" sans alternative textuelle
const Test1_1_RoleImgMissingAlt = () => {
  return (
    <div>
      {/* Élément avec role="img" sans alternative - ERREUR */}
      <div role="img" style={{backgroundImage: 'url(logo.png)'}}>
        Contenu décoratif
      </div>
      
      {/* Élément avec role="img" avec aria-label vide - ERREUR */}
      <div role="img" aria-label="" style={{backgroundImage: 'url(logo.png)'}}>
        Contenu décoratif
      </div>
      
      {/* Élément avec role="img" avec aria-label contenant seulement des espaces - ERREUR */}
      <div role="img" aria-label="   " style={{backgroundImage: 'url(logo.png)'}}>
        Contenu décoratif
      </div>
    </div>
  );
};

export default Test1_1_RoleImgMissingAlt;
