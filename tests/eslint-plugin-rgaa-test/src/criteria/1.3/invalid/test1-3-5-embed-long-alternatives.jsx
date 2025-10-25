// Test 1.3.5 - Images <embed> avec alternatives trop longues
const Test1_3_5_EmbedLongAlternatives = () => {
  return (
    <div>
      {/* Embed avec aria-label trop court - ATTENTION */}
      <embed type="image/png" src="banner.png" role="img" aria-label="Bannière" />
      
      {/* Embed avec title trop court - ATTENTION */}
      <embed type="image/jpeg" src="photo.jpg" role="img" title="Photo" />
      
      {/* Embed avec aria-labelledby trop court - ATTENTION */}
      <embed type="image/svg" src="icon.svg" role="img" aria-labelledby="embed-title" />
      <span id="embed-title">Icône</span>
    </div>
  );
};

export default Test1_3_5_EmbedLongAlternatives;
