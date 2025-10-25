// Test 1.1.1 - Images <img> sans alternative textuelle
const Test1_1_ImgMissingAlt = () => {
  return (
    <div>
      {/* Image sans attribut alt - ERREUR */}
      <img src="logo.png" />
      
      {/* Image avec alt vide - ERREUR */}
      <img src="logo.png" alt="" />
      
      {/* Image avec alt contenant seulement des espaces - ERREUR */}
      <img src="logo.png" alt="   " />
    </div>
  );
};

export default Test1_1_ImgMissingAlt;
