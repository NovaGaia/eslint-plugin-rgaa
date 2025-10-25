import React from 'react';

// Fichier HTML converti en TSX pour tester les règles RGAA
const ExampleCorrectHTML: React.FC = () => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exemple correct RGAA</title>
      </head>
      <body>
        <h1>Page d'exemple avec un code accessible</h1>
        
        {/* Image porteuse d'information avec alt approprié */}
        <img src="logo.png" alt="Logo de l'entreprise" />
        
        {/* Image décorative avec alt vide et role presentation */}
        <img src="decoration.jpg" alt="" role="presentation" />
        
        {/* Image avec alt concis et descriptif */}
        <img src="chart.png" alt="Graphique des ventes mensuelles" />
        
        {/* Image décorative avec role none */}
        <img src="banner.jpg" alt="" role="none" />
        
        {/* Image avec alt descriptif */}
        <img src="profile.jpg" alt="Photo de profil de l'utilisateur" />
        
        <p>Cette page contient des exemples d'images correctement accessibles selon les critères RGAA.</p>
      </body>
    </html>
  );
};

export default ExampleCorrectHTML;
