// Test 1.1.8 - Images bitmap <canvas> sans role="img"
const Test1_8_CanvasMissingRole = () => {
  return (
    <div>
      {/* Canvas sans role="img" - ERREUR */}
      <canvas width="100" height="100" />
      
      {/* Canvas avec role="img" mais sans alternative - ERREUR */}
      <canvas width="100" height="100" role="img" />
      
      {/* Canvas avec role="img" et aria-label vide - ERREUR */}
      <canvas width="100" height="100" role="img" aria-label="" />
    </div>
  );
};

export default Test1_8_CanvasMissingRole;

