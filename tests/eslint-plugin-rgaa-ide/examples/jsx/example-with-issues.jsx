import React from 'react';

const ExampleWithIssues = () => {
  return (
    <div>
      <h1>Composant React avec problèmes RGAA</h1>
      
      {/* Problème RGAA 1.1 : Image sans attribut alt */}
      <img src="/logo.png" />
      
      {/* Problème RGAA 1.1 : Image avec alt vide (devrait être décorative) */}
      <img src="/decoration.jpg" alt="" />
      
      {/* Problème RGAA 1.1 : Image avec alt trop long */}
      <img 
        src="/chart.png" 
        alt="Ceci est un graphique très détaillé qui montre l'évolution des ventes sur une période de 12 mois avec des données précises pour chaque mois et des analyses approfondies des tendances du marché" 
      />
      
      {/* Problème RGAA 1.1 : Image avec alt contenant seulement des espaces */}
      <img src="/banner.jpg" alt="   " />
      
      {/* Image correcte avec alt approprié */}
      <img src="/profile.jpg" alt="Photo de profil de l'utilisateur" />
      
      {/* Image décorative correcte */}
      <img src="/separator.png" alt="" role="presentation" />
      
      <p>Ce composant contient plusieurs exemples d'images avec des problèmes d'accessibilité qui devraient être détectés par le plugin RGAA dans votre IDE.</p>
    </div>
  );
};

export default ExampleWithIssues;

