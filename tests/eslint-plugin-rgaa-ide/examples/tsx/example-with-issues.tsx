import React from 'react';

// Fichier HTML converti en TSX pour tester les règles RGAA
const ExampleWithIssuesHTML: React.FC = () => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exemple avec problèmes RGAA</title>
      </head>
      <body>
        <h1>Page d'exemple avec des problèmes d'accessibilité</h1>
        
        {/* Problème RGAA 1.1 : Image sans attribut alt */}
        <img src="logo.png" />
        
        {/* Problème RGAA 1.1 : Image avec alt vide (devrait être décorative) */}
        <img src="decoration.jpg" alt="" />
        
        {/* Problème RGAA 1.1 : Image avec alt trop long */}
        <img src="chart.png" alt="Ceci est un graphique très détaillé qui montre l'évolution des ventes sur une période de 12 mois avec des données précises pour chaque mois et des analyses approfondies des tendances du marché" />
        
        {/* Problème RGAA 1.1 : Image avec alt contenant seulement des espaces */}
        <img src="banner.jpg" alt="   " />
        
        {/* Image correcte avec alt approprié */}
        <img src="profile.jpg" alt="Photo de profil de l'utilisateur" />
        
        {/* Image décorative correcte */}
        <img src="separator.png" alt="" role="presentation" />
        
        <p>Cette page contient plusieurs exemples d'images avec des problèmes d'accessibilité qui devraient être détectés par le plugin RGAA dans votre IDE.</p>
      </body>
    </html>
  );
};

export default ExampleWithIssuesHTML;
