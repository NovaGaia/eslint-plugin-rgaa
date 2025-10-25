// Test 1.1.7 - Images embarquées <embed type="image/..."> sans role="img"
const Test1_7_EmbedMissingRole = () => {
  return (
    <div>
      {/* Embed sans role="img" - ERREUR */}
      <embed src="image.png" type="image/png" />
      
      {/* Embed avec role="img" mais sans alternative - ERREUR */}
      <embed src="image.png" type="image/png" role="img" />
      
      {/* Embed avec role="img" et aria-label vide - ERREUR */}
      <embed src="image.png" type="image/png" role="img" aria-label="" />
    </div>
  );
};

export default Test1_7_EmbedMissingRole;

