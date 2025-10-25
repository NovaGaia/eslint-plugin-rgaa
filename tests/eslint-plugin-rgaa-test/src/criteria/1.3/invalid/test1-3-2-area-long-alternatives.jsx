// Test 1.3.2 - Zones <area> avec alternatives trop longues
const Test1_3_2_AreaLongAlternatives = () => {
  return (
    <div>
      <map name="imagemap">
        {/* Zone avec alt trop court - ATTENTION */}
        <area shape="rect" coords="0,0,100,100" href="/products" alt="Zone 1" />
        
        {/* Zone avec aria-label trop court - ATTENTION */}
        <area shape="circle" coords="50,50,25" href="/contact" aria-label="Zone 2" />
        
        {/* Zone avec aria-labelledby trop court - ATTENTION */}
        <area shape="poly" coords="0,0,50,0,25,50" href="/about" aria-labelledby="area-title" />
        <span id="area-title">Zone 3</span>
      </map>
    </div>
  );
};

export default Test1_3_2_AreaLongAlternatives;
