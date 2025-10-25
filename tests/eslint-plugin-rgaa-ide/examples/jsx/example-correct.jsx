import React from 'react';

const ExampleCorrect = () => {
  return (
    <div>
      <h1>Composant React avec code accessible</h1>
      
      {/* Image porteuse d'information avec alt approprié */}
      <img src="/logo.png" alt="Logo de l'entreprise" />
      
      {/* Image décorative avec alt vide et role presentation */}
      <img src="/decoration.jpg" alt="" role="presentation" />
      
      {/* Image avec alt concis et descriptif */}
      <img src="/chart.png" alt="Graphique des ventes mensuelles" />
      
      {/* Image décorative avec role none */}
      <img src="/banner.jpg" alt="" role="none" />
      
      {/* Image avec alt descriptif */}
      <img src="/profile.jpg" alt="Photo de profil de l'utilisateur" />
      
      <p>Ce composant contient des exemples d'images correctement accessibles selon les critères RGAA.</p>
    </div>
  );
};

export default ExampleCorrect;
