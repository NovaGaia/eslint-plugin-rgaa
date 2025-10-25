// Test 1.1.2 - Zones d'images réactives <area> avec alternatives textuelles valides
const Test1_2_AreaValidAlternatives = () => {
  return (
    <div>
      <map name="imagemap">
        {/* Zone avec alt valide - OK */}
        <area shape="rect" coords="0,0,100,100" href="#section1" alt="Section 1 - Accueil avec navigation principale" />
        
        {/* Zone avec aria-label - OK */}
        <area shape="rect" coords="0,0,100,100" href="#section1" aria-label="Section 1 - Accueil avec navigation principale" />
      </map>
      <img src="imagemap.png" usemap="#imagemap" alt="Plan du site web avec navigation interactive et zones cliquables" />
    </div>
  );
};

export default Test1_2_AreaValidAlternatives;

