// Test 1.3.4 - Images <object> avec alternatives trop longues
const Test1_3_4_ObjectLongAlternatives = () => {
  return (
    <div>
      {/* Object avec aria-label trop court - ATTENTION */}
      <object type="image/png" data="chart.png" role="img" aria-label="Graphique" />
      
      {/* Object avec title trop court - ATTENTION */}
      <object type="image/jpeg" data="photo.jpg" role="img" title="Photo" />
      
      {/* Object avec aria-labelledby trop court - ATTENTION */}
      <object type="image/svg" data="icon.svg" role="img" aria-labelledby="object-title" />
      <span id="object-title">Icône</span>
    </div>
  );
};

export default Test1_3_4_ObjectLongAlternatives;
