// Test 1.1.2 - Zones d'images réactives <area> avec alternatives textuelles valides
const Test1_2_AreaValidAlternatives = () => {
  return (
    <div>
      <map name="imagemap">
        {/* Zone avec alt valide - OK */}
        <area shape="rect" coords="0,0,100,100" href="#section1" alt="Section 1" />
        
        {/* Zone avec aria-label - OK */}
        <area shape="rect" coords="0,0,100,100" href="#section1" aria-label="Section 1" />
      </map>
      <img src="imagemap.png" usemap="#imagemap" alt="Plan du site" />
    </div>
  );
};

export default Test1_2_AreaValidAlternatives;

