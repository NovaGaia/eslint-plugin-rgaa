// Test 1.1.2 - Zones d'images réactives <area> sans alternative textuelle
const Test1_2_AreaMissingAlt = () => {
  return (
    <div>
      <map name="imagemap">
        {/* Zone sans alternative - ERREUR */}
        <area shape="rect" coords="0,0,100,100" href="#section1" />
        
        {/* Zone avec alt vide - ERREUR */}
        <area shape="rect" coords="0,0,100,100" href="#section1" alt="" />
        
        {/* Zone avec alt contenant seulement des espaces - ERREUR */}
        <area shape="rect" coords="0,0,100,100" href="#section1" alt="   " />
        
        {/* Zone avec aria-label vide - ERREUR */}
        <area shape="rect" coords="0,0,100,100" href="#section1" aria-label="" />
      </map>
      <img src="imagemap.png" usemap="#imagemap" alt="Plan du site" />
    </div>
  );
};

export default Test1_2_AreaMissingAlt;

