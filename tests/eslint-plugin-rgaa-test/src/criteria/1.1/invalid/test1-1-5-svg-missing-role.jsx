// Test 1.1.5 - Images vectorielles <svg> sans role="img"
const Test1_5_SvgMissingRole = () => {
  return (
    <div>
      {/* SVG sans role="img" - ERREUR */}
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG avec role="img" mais sans alternative - ERREUR */}
      <svg width="100" height="100" role="img">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      
      {/* SVG avec role="img" et title vide - ERREUR */}
      <svg width="100" height="100" role="img">
        <title></title>
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
    </div>
  );
};

export default Test1_5_SvgMissingRole;

