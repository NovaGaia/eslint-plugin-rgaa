// Test 1.3.2 - Zones <area> avec alternatives courtes
const Test1_3_2_AreaShortAlternatives = () => {
  return (
    <div>
      <map name="imagemap">
        {/* Zone avec alt suffisamment long - OK */}
        <area shape="rect" coords="0,0,100,100" href="/products" alt="Zone de navigation vers la section des produits avec plusieurs options disponibles" />
        
        {/* Zone avec aria-label suffisamment long - OK */}
        <area shape="circle" coords="50,50,25" href="/contact" aria-label="Zone de contact pour obtenir des informations détaillées" />
        
        {/* Zone avec aria-labelledby + alt suffisamment long - OK */}
        <area shape="poly" coords="0,0,50,0,25,50" href="/about" alt="Zone d'information sur l'entreprise et son histoire" aria-labelledby="area-title" />
        <span id="area-title">Zone d'information sur l'entreprise et son histoire</span>
      </map>
    </div>
  );
};

export default Test1_3_2_AreaShortAlternatives;
