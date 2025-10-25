// Test 1.1.4 - Images réactives côté serveur <img ismap> avec liens adjacents
const Test1_4_ImgIsmapValidLinks = () => {
  return (
    <div>
      {/* Image ismap avec liens adjacents - OK */}
      <img src="server-map.png" ismap alt="Plan du site" />
      <div>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
      </div>
    </div>
  );
};

export default Test1_4_ImgIsmapValidLinks;

