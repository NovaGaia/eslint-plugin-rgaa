// Test 1.1.6 - Images objet <object type="image/..."> sans role="img"
const Test1_6_ObjectMissingRole = () => {
  return (
    <div>
      {/* Object sans role="img" - ERREUR */}
      <object data="image.svg" type="image/svg+xml" />
      
      {/* Object avec role="img" mais sans alternative - ERREUR */}
      <object data="image.svg" type="image/svg+xml" role="img" />
      
      {/* Object avec role="img" et aria-label vide - ERREUR */}
      <object data="image.svg" type="image/svg+xml" role="img" aria-label="" />
    </div>
  );
};

export default Test1_6_ObjectMissingRole;

