#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour créer les pages thématiques des critères RGAA
 */

const thematicPages = [
  {
    id: '4-multimedia',
    title: 'Thématique 4 : Multimédia',
    description: 'Cette thématique couvre l\'accessibilité des contenus multimédia (vidéos, audios) dans le RGAA.',
    criteria: [
      { id: '4.1', title: 'Médias temporels pré-enregistrés', description: 'Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription ?' },
      { id: '4.2', title: 'Transcriptions et audiodescriptions', description: 'Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes ?' },
      { id: '4.3', title: 'Sous-titres synchronisés', description: 'Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés ?' },
      { id: '4.4', title: 'Pertinence des sous-titres', description: 'Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?' },
      { id: '4.5', title: 'Audiodescription synchronisée', description: 'Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée ?' },
      { id: '4.6', title: 'Pertinence de l\'audiodescription', description: 'Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?' },
      { id: '4.7', title: 'Identification des médias', description: 'Chaque média temporel est-il clairement identifiable ?' },
      { id: '4.8', title: 'Alternatives aux médias non temporels', description: 'Chaque média non temporel a-t-il, si nécessaire, une alternative ?' },
      { id: '4.9', title: 'Pertinence des alternatives', description: 'Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?' },
      { id: '4.10', title: 'Contrôle des sons automatiques', description: 'Chaque son déclenché automatiquement est-il contrôlable par l\'utilisateur ?' },
      { id: '4.11', title: 'Contrôle clavier des médias', description: 'La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?' },
      { id: '4.12', title: 'Contrôle clavier des médias non temporels', description: 'La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?' },
      { id: '4.13', title: 'Compatibilité avec les technologies d\'assistance', description: 'Chaque média temporel et non temporel est-il compatible avec les technologies d\'assistance ?' }
    ],
    techniques: [
      'Transcription textuelle',
      'Audiodescription synchronisée',
      'Sous-titres synchronisés',
      'Contrôle clavier',
      'Alternatives textuelles'
    ],
    glossary: [
      'Média temporel (type son, vidéo et synchronisé)',
      'Média non temporel',
      'Transcription textuelle (média temporel)',
      'Audiodescription synchronisée (média temporel)',
      'Sous-titres synchronisés (objet multimédia)'
    ]
  },
  {
    id: '5-tableaux',
    title: 'Thématique 5 : Tableaux',
    description: 'Cette thématique couvre l\'accessibilité des tableaux de données dans le RGAA.',
    criteria: [
      { id: '5.1', title: 'Résumé des tableaux complexes', description: 'Chaque tableau de données complexe a-t-il un résumé ?' },
      { id: '5.2', title: 'Pertinence du résumé', description: 'Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?' },
      { id: '5.3', title: 'Tableaux de mise en forme', description: 'Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ?' },
      { id: '5.4', title: 'Titre des tableaux', description: 'Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?' },
      { id: '5.5', title: 'Pertinence du titre', description: 'Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ?' },
      { id: '5.6', title: 'En-têtes de colonnes et lignes', description: 'Pour chaque tableau de données, chaque en-tête de colonne et chaque en-tête de ligne sont-ils correctement déclarés ?' },
      { id: '5.7', title: 'Association cellules-en-têtes', description: 'Pour chaque tableau de données, la technique appropriée permettant d\'associer chaque cellule avec ses en-têtes est-elle utilisée ?' },
      { id: '5.8', title: 'Tableaux de mise en forme', description: 'Chaque tableau de mise en forme ne doit pas utiliser d\'éléments propres aux tableaux de données. Cette règle est-elle respectée ?' }
    ],
    techniques: [
      'Résumé de tableau',
      'En-têtes de colonnes et lignes',
      'Association cellules-en-têtes',
      'Tableaux de mise en forme',
      'Linéarisation'
    ],
    glossary: [
      'Tableau de données',
      'Tableau de données complexe',
      'Tableau de mise en forme',
      'En-tête de colonne ou de ligne',
      'Résumé (de tableau)'
    ]
  },
  {
    id: '6-liens',
    title: 'Thématique 6 : Liens',
    description: 'Cette thématique couvre l\'accessibilité des liens et de la navigation dans le RGAA.',
    criteria: [
      { id: '6.1', title: 'Liens explicites', description: 'Chaque lien est-il explicite ?' },
      { id: '6.2', title: 'Intitulé des liens', description: 'Dans chaque page web, chaque lien a-t-il un intitulé ?' }
    ],
    techniques: [
      'Intitulé de lien',
      'Contexte du lien',
      'Liens explicites',
      'Navigation clavier'
    ],
    glossary: [
      'Lien',
      'Intitulé (ou nom accessible) de lien',
      'Intitulé visible',
      'Lien dont la nature n\'est pas évidente',
      'Contexte du lien'
    ]
  },
  {
    id: '7-scripts',
    title: 'Thématique 7 : Scripts',
    description: 'Cette thématique couvre l\'accessibilité des scripts JavaScript dans le RGAA.',
    criteria: [
      { id: '7.1', title: 'Compatibilité des scripts', description: 'Chaque script est-il, si nécessaire, compatible avec les technologies d\'assistance ?' },
      { id: '7.2', title: 'Alternatives aux scripts', description: 'Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?' },
      { id: '7.3', title: 'Contrôle clavier des scripts', description: 'Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage ?' },
      { id: '7.4', title: 'Changement de contexte', description: 'Pour chaque script qui initie un changement de contexte, l\'utilisateur est-il averti ou en a-t-il le contrôle ?' },
      { id: '7.5', title: 'Messages de statut', description: 'Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d\'assistance ?' }
    ],
    techniques: [
      'Alternative à script',
      'Contrôle clavier',
      'Changement de contexte',
      'Messages de statut',
      'Compatibilité technologies d\'assistance'
    ],
    glossary: [
      'Script',
      'Alternative (à script)',
      'Changement de contexte',
      'Message de statut',
      'Compatible avec les technologies d\'assistance'
    ]
  },
  {
    id: '8-elements-obligatoires',
    title: 'Thématique 8 : Éléments obligatoires',
    description: 'Cette thématique couvre les éléments obligatoires de structure HTML dans le RGAA.',
    criteria: [
      { id: '8.1', title: 'Type de document', description: 'Chaque page web est-elle définie par un type de document ?' },
      { id: '8.2', title: 'Validité du code', description: 'Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ?' },
      { id: '8.3', title: 'Langue par défaut', description: 'Dans chaque page web, la langue par défaut est-elle présente ?' },
      { id: '8.4', title: 'Code de langue', description: 'Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?' },
      { id: '8.5', title: 'Titre de page', description: 'Chaque page web a-t-elle un titre de page ?' },
      { id: '8.6', title: 'Pertinence du titre', description: 'Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?' },
      { id: '8.7', title: 'Changement de langue', description: 'Dans chaque page web, chaque changement de langue est-il indiqué dans le code source ?' },
      { id: '8.8', title: 'Validité du code de langue', description: 'Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?' },
      { id: '8.9', title: 'Balises de présentation', description: 'Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?' },
      { id: '8.10', title: 'Sens de lecture', description: 'Dans chaque page web, les changements du sens de lecture sont-ils signalés ?' }
    ],
    techniques: [
      'Type de document',
      'Langue par défaut',
      'Titre de page',
      'Changement de langue',
      'Balises sémantiques'
    ],
    glossary: [
      'Type de document',
      'Langue par défaut',
      'Code de langue',
      'Titre de page',
      'Changement de langue'
    ]
  },
  {
    id: '9-structure',
    title: 'Thématique 9 : Structure de l\'information',
    description: 'Cette thématique couvre la structure et l\'organisation de l\'information dans le RGAA.',
    criteria: [
      { id: '9.1', title: 'Hiérarchie des titres', description: 'Dans chaque page web, l\'information est-elle structurée par l\'utilisation appropriée de titres ?' },
      { id: '9.2', title: 'Cohérence de la structure', description: 'Dans chaque page web, la structure du document est-elle cohérente ?' },
      { id: '9.3', title: 'Structure des listes', description: 'Dans chaque page web, chaque liste est-elle correctement structurée ?' },
      { id: '9.4', title: 'Citations', description: 'Dans chaque page web, chaque citation est-elle correctement indiquée ?' }
    ],
    techniques: [
      'Hiérarchie des titres',
      'Structure des listes',
      'Citations',
      'Landmarks',
      'Structure cohérente'
    ],
    glossary: [
      'Titre',
      'Structure du document',
      'Listes',
      'Landmarks'
    ]
  },
  {
    id: '10-presentation',
    title: 'Thématique 10 : Présentation de l\'information',
    description: 'Cette thématique couvre la présentation et la mise en forme de l\'information dans le RGAA.',
    criteria: [
      { id: '10.1', title: 'Feuilles de styles', description: 'Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l\'information ?' },
      { id: '10.2', title: 'Contenu sans styles', description: 'Dans chaque page web, le contenu visible porteur d\'information reste-t-il présent lorsque les feuilles de styles sont désactivées ?' },
      { id: '10.3', title: 'Compréhension sans styles', description: 'Dans chaque page web, l\'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?' },
      { id: '10.4', title: 'Taille des caractères', description: 'Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu\'à 200 %, au moins ?' },
      { id: '10.5', title: 'Déclarations CSS', description: 'Dans chaque page web, les déclarations CSS de couleurs de fond d\'élément et de police sont-elles correctement utilisées ?' },
      { id: '10.6', title: 'Liens visibles', description: 'Dans chaque page web, chaque lien dont la nature n\'est pas évidente est-il visible par rapport au texte environnant ?' },
      { id: '10.7', title: 'Prise de focus', description: 'Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?' },
      { id: '10.8', title: 'Contenu caché', description: 'Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d\'assistance ?' },
      { id: '10.9', title: 'Information par la forme', description: 'Dans chaque page web, l\'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?' },
      { id: '10.10', title: 'Information par la forme (implémentation)', description: 'Dans chaque page web, l\'information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?' },
      { id: '10.11', title: 'Responsive design', description: 'Dans chaque page web, les contenus peuvent-ils être présentés sans perte d\'information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px ?' },
      { id: '10.12', title: 'Espacement du texte', description: 'Dans chaque page web, les propriétés d\'espacement du texte peuvent-elles être redéfinies par l\'utilisateur sans perte de contenu ou de fonctionnalité ?' },
      { id: '10.13', title: 'Contenus additionnels', description: 'Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d\'un composant d\'interface sont-ils contrôlables par l\'utilisateur ?' },
      { id: '10.14', title: 'Contenus CSS', description: 'Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?' }
    ],
    techniques: [
      'Feuilles de styles',
      'Responsive design',
      'Focus visible',
      'Contenu caché',
      'Espacement du texte'
    ],
    glossary: [
      'Présentation de l\'information',
      'Feuille de style',
      'Contenu visible',
      'Contenu caché',
      'Prise de focus'
    ]
  },
  {
    id: '11-formulaires',
    title: 'Thématique 11 : Formulaires',
    description: 'Cette thématique couvre l\'accessibilité des formulaires dans le RGAA.',
    criteria: [
      { id: '11.1', title: 'Étiquettes des champs', description: 'Chaque champ de formulaire a-t-il une étiquette ?' },
      { id: '11.2', title: 'Pertinence des étiquettes', description: 'Chaque étiquette associée à un champ de formulaire est-elle pertinente ?' },
      { id: '11.3', title: 'Cohérence des étiquettes', description: 'Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répétée plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ?' },
      { id: '11.4', title: 'Étiquettes accolées', description: 'Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés ?' },
      { id: '11.5', title: 'Regroupement des champs', description: 'Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?' },
      { id: '11.6', title: 'Légendes des regroupements', description: 'Dans chaque formulaire, chaque regroupement de champs de même nature a-t-il une légende ?' },
      { id: '11.7', title: 'Pertinence des légendes', description: 'Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?' },
      { id: '11.8', title: 'Regroupement des listes', description: 'Dans chaque formulaire, les items de même nature d\'une liste de choix sont-ils regroupés de manière pertinente ?' },
      { id: '11.9', title: 'Intitulés des boutons', description: 'Dans chaque formulaire, l\'intitulé de chaque bouton est-il pertinent ?' },
      { id: '11.10', title: 'Contrôle de saisie', description: 'Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ?' },
      { id: '11.11', title: 'Suggestions de correction', description: 'Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?' },
      { id: '11.12', title: 'Modification des données', description: 'Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l\'utilisateur ?' },
      { id: '11.13', title: 'Finalité des champs', description: 'La finalité d\'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l\'utilisateur ?' }
    ],
    techniques: [
      'Étiquettes de champs',
      'Regroupement de champs',
      'Contrôle de saisie',
      'Suggestions d\'erreur',
      'Modification des données'
    ],
    glossary: [
      'Formulaire',
      'Champ de saisie de formulaire',
      'Étiquette de champ de formulaire',
      'Bouton (formulaire)',
      'Contrôle de saisie (formulaire)'
    ]
  },
  {
    id: '12-navigation',
    title: 'Thématique 12 : Navigation',
    description: 'Cette thématique couvre l\'accessibilité de la navigation dans le RGAA.',
    criteria: [
      { id: '12.1', title: 'Systèmes de navigation', description: 'Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins ?' },
      { id: '12.2', title: 'Cohérence de la navigation', description: 'Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place ?' },
      { id: '12.3', title: 'Plan du site', description: 'La page « plan du site » est-elle pertinente ?' },
      { id: '12.4', title: 'Accessibilité du plan', description: 'Dans chaque ensemble de pages, la page « plan du site » est-elle accessible à partir d\'une fonctionnalité identique ?' },
      { id: '12.5', title: 'Moteur de recherche', description: 'Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?' },
      { id: '12.6', title: 'Zones de regroupement', description: 'Les zones de regroupement de contenus présentes dans plusieurs pages web peuvent-elles être atteintes ou évitées ?' },
      { id: '12.7', title: 'Liens d\'évitement', description: 'Dans chaque page web, un lien d\'évitement ou d\'accès rapide à la zone de contenu principal est-il présent ?' },
      { id: '12.8', title: 'Ordre de tabulation', description: 'Dans chaque page web, l\'ordre de tabulation est-il cohérent ?' },
      { id: '12.9', title: 'Piège au clavier', description: 'Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?' },
      { id: '12.10', title: 'Raccourcis clavier', description: 'Dans chaque page web, les raccourcis clavier n\'utilisant qu\'une seule touche sont-ils contrôlables par l\'utilisateur ?' },
      { id: '12.11', title: 'Contenus additionnels', description: 'Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l\'activation d\'un composant d\'interface sont-ils si nécessaire atteignables au clavier ?' }
    ],
    techniques: [
      'Systèmes de navigation',
      'Plan du site',
      'Moteur de recherche',
      'Liens d\'évitement',
      'Ordre de tabulation'
    ],
    glossary: [
      'Système de navigation',
      'Menu et barre de navigation',
      'Page « plan du site »',
      'Moteur de recherche (interne à un site web)',
      'Liens d\'évitement ou d\'accès rapide'
    ]
  },
  {
    id: '13-consultation',
    title: 'Thématique 13 : Consultation',
    description: 'Cette thématique couvre l\'accessibilité de la consultation et du téléchargement dans le RGAA.',
    criteria: [
      { id: '13.1', title: 'Contrôle des limites de temps', description: 'Pour chaque page web, l\'utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu ?' },
      { id: '13.2', title: 'Ouverture de fenêtres', description: 'Dans chaque page web, l\'ouverture d\'une nouvelle fenêtre ne doit pas être déclenchée sans action de l\'utilisateur. Cette règle est-elle respectée ?' },
      { id: '13.3', title: 'Documents bureautiques', description: 'Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible ?' },
      { id: '13.4', title: 'Versions accessibles', description: 'Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?' },
      { id: '13.5', title: 'Contenu cryptique', description: 'Dans chaque page web, chaque contenu cryptique a-t-il une alternative ?' },
      { id: '13.6', title: 'Pertinence des alternatives', description: 'Dans chaque page web, pour chaque contenu cryptique ayant une alternative, cette alternative est-elle pertinente ?' },
      { id: '13.7', title: 'Effets de flash', description: 'Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?' },
      { id: '13.8', title: 'Contenu en mouvement', description: 'Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l\'utilisateur ?' },
      { id: '13.9', title: 'Orientation de l\'écran', description: 'Dans chaque page web, le contenu proposé est-il consultable quelle que soit l\'orientation de l\'écran ?' },
      { id: '13.10', title: 'Gestes complexes', description: 'Dans chaque page web, les fonctionnalités utilisables au moyen d\'un geste complexe peuvent-elles être également disponibles au moyen d\'un geste simple ?' },
      { id: '13.11', title: 'Annulation des actions', description: 'Dans chaque page web, les actions déclenchées au moyen d\'un dispositif de pointage sur un point unique de l\'écran peuvent-elles faire l\'objet d\'une annulation ?' },
      { id: '13.12', title: 'Mouvement de l\'appareil', description: 'Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l\'appareil ou vers l\'appareil peuvent-elles être satisfaites de manière alternative ?' }
    ],
    techniques: [
      'Contrôle des limites de temps',
      'Versions accessibles',
      'Alternatives au contenu cryptique',
      'Contrôle du contenu en mouvement',
      'Gestes simples'
    ],
    glossary: [
      'Version accessible (pour un document en téléchargement)',
      'Contenu cryptique',
      'Contrôle (contenu en mouvement ou clignotant)',
      'Gestes complexes et gestes simples'
    ]
  }
];

function createThematicPage(thematic) {
  const content = `# ${thematic.title}

${thematic.description}

## 🎯 Objectif

${getThematicObjective(thematic.id)}

## 📋 Critères de cette thématique

${thematic.criteria.map(criterion => 
  `### [${criterion.id} - ${criterion.title}](${criterion.id}/)
${criterion.description}`
).join('\n\n')}

## 🔧 Techniques d'implémentation

${thematic.techniques.map(technique => `- **${technique}**`).join('\n')}

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
${getThematicChecklist(thematic.id)}

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - ${getThematicWCAGSection(thematic.id)}](https://www.w3.org/WAI/WCAG21/quickref/#${getThematicWCAGSection(thematic.id).toLowerCase()})

### Glossaire RGAA
${thematic.glossary.map(term => `- [${term}](../../glossaire/${term.toLowerCase().replace(/\s+/g, '-').replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o').replace(/[ùúûü]/g, 'u').replace(/[ç]/g, 'c').replace(/[ñ]/g, 'n')})`).join('\n')}

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
\`\`\`javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    ${getThematicRules(thematic.id)}
  }
};
\`\`\`

### Règles disponibles
${getThematicRulesList(thematic.id)}

## ⚠️ Bonnes pratiques

${getThematicBestPractices(thematic.id)}

---

*Cette thématique est essentielle pour l'accessibilité web. ${getThematicConclusion(thematic.id)}*`;

  return content;
}

function getThematicObjective(id) {
  const objectives = {
    '4-multimedia': 'Assurer que tous les contenus multimédia sont accessibles aux utilisateurs de technologies d\'assistance, avec des alternatives appropriées.',
    '5-tableaux': 'Assurer que tous les tableaux de données sont correctement structurés et accessibles aux utilisateurs de technologies d\'assistance.',
    '6-liens': 'Assurer que tous les liens sont explicites et accessibles aux utilisateurs de technologies d\'assistance.',
    '7-scripts': 'Assurer que tous les scripts sont compatibles avec les technologies d\'assistance et contrôlables au clavier.',
    '8-elements-obligatoires': 'Assurer que tous les éléments obligatoires de structure HTML sont présents et correctement implémentés.',
    '9-structure': 'Assurer que l\'information est correctement structurée et organisée pour tous les utilisateurs.',
    '10-presentation': 'Assurer que la présentation de l\'information est accessible et ne dépend pas uniquement de la mise en forme.',
    '11-formulaires': 'Assurer que tous les formulaires sont accessibles et utilisables par tous les utilisateurs.',
    '12-navigation': 'Assurer que la navigation est accessible et cohérente sur tout le site.',
    '13-consultation': 'Assurer que la consultation et le téléchargement de contenus sont accessibles à tous les utilisateurs.'
  };
  return objectives[id] || 'Assurer l\'accessibilité de cette thématique.';
}

function getThematicChecklist(id) {
  const checklists = {
    '4-multimedia': [
      '[ ] Tous les médias ont des alternatives',
      '[ ] Les transcriptions sont pertinentes',
      '[ ] Les sous-titres sont synchronisés',
      '[ ] Les audiodescriptions sont pertinentes',
      '[ ] Les médias sont contrôlables au clavier'
    ],
    '5-tableaux': [
      '[ ] Les tableaux complexes ont un résumé',
      '[ ] Les en-têtes sont correctement déclarés',
      '[ ] Les cellules sont associées aux en-têtes',
      '[ ] Les tableaux de mise en forme sont corrects',
      '[ ] La linéarisation est compréhensible'
    ],
    '6-liens': [
      '[ ] Tous les liens sont explicites',
      '[ ] Les liens ont des intitulés pertinents',
      '[ ] Les liens sont accessibles au clavier',
      '[ ] Le contexte des liens est clair',
      '[ ] Les liens composites sont corrects'
    ],
    '7-scripts': [
      '[ ] Les scripts sont compatibles avec les TA',
      '[ ] Les alternatives aux scripts sont pertinentes',
      '[ ] Les scripts sont contrôlables au clavier',
      '[ ] Les changements de contexte sont signalés',
      '[ ] Les messages de statut sont restitués'
    ],
    '8-elements-obligatoires': [
      '[ ] Le type de document est déclaré',
      '[ ] Le code HTML est valide',
      '[ ] La langue par défaut est définie',
      '[ ] Le titre de page est présent',
      '[ ] Les changements de langue sont signalés'
    ],
    '9-structure': [
      '[ ] La hiérarchie des titres est correcte',
      '[ ] La structure est cohérente',
      '[ ] Les listes sont correctement structurées',
      '[ ] Les citations sont indiquées',
      '[ ] Les landmarks sont utilisés'
    ],
    '10-presentation': [
      '[ ] Les styles CSS sont utilisés',
      '[ ] Le contenu reste présent sans styles',
      '[ ] L\'information reste compréhensible',
      '[ ] Le texte est lisible à 200%',
      '[ ] Les déclarations CSS sont correctes'
    ],
    '11-formulaires': [
      '[ ] Tous les champs ont des étiquettes',
      '[ ] Les étiquettes sont pertinentes',
      '[ ] Les étiquettes sont cohérentes',
      '[ ] Les champs sont regroupés si nécessaire',
      '[ ] Les légendes sont présentes'
    ],
    '12-navigation': [
      '[ ] Plusieurs systèmes de navigation',
      '[ ] La navigation est cohérente',
      '[ ] Le plan du site est accessible',
      '[ ] Le moteur de recherche est accessible',
      '[ ] Les liens d\'évitement sont présents'
    ],
    '13-consultation': [
      '[ ] Les limites de temps sont contrôlables',
      '[ ] Les nouvelles fenêtres sont signalées',
      '[ ] Les documents ont des versions accessibles',
      '[ ] Le contenu cryptique a des alternatives',
      '[ ] Les effets de flash sont contrôlés'
    ]
  };
  return checklists[id] || ['[ ] Vérifier l\'accessibilité'];
}

function getThematicWCAGSection(id) {
  const sections = {
    '4-multimedia': 'Media',
    '5-tableaux': 'Tables',
    '6-liens': 'Links',
    '7-scripts': 'Scripts',
    '8-elements-obligatoires': 'Language',
    '9-structure': 'Headings',
    '10-presentation': 'Presentation',
    '11-formulaires': 'Forms',
    '12-navigation': 'Navigation',
    '13-consultation': 'Timing'
  };
  return sections[id] || 'General';
}

function getThematicRules(id) {
  const rules = {
    '4-multimedia': "'rgaa/media-alternatives': 'error',\n    'rgaa/media-controls': 'warn'",
    '5-tableaux': "'rgaa/table-headers': 'error',\n    'rgaa/table-summary': 'warn'",
    '6-liens': "'rgaa/link-text': 'error',\n    'rgaa/link-context': 'warn'",
    '7-scripts': "'rgaa/script-alternatives': 'error',\n    'rgaa/script-controls': 'warn'",
    '8-elements-obligatoires': "'rgaa/doctype': 'error',\n    'rgaa/lang-attribute': 'warn'",
    '9-structure': "'rgaa/heading-hierarchy': 'error',\n    'rgaa/list-structure': 'warn'",
    '10-presentation': "'rgaa/css-presentation': 'error',\n    'rgaa/focus-visible': 'warn'",
    '11-formulaires': "'rgaa/form-labels': 'error',\n    'rgaa/form-grouping': 'warn'",
    '12-navigation': "'rgaa/navigation-systems': 'error',\n    'rgaa/skip-links': 'warn'",
    '13-consultation': "'rgaa/timing-controls': 'error',\n    'rgaa/motion-controls': 'warn'"
  };
  return rules[id] || "'rgaa/general': 'error'";
}

function getThematicRulesList(id) {
  const rules = {
    '4-multimedia': '- `rgaa/media-alternatives` : Alternatives aux médias\n- `rgaa/media-controls` : Contrôles des médias',
    '5-tableaux': '- `rgaa/table-headers` : En-têtes de tableaux\n- `rgaa/table-summary` : Résumés de tableaux',
    '6-liens': '- `rgaa/link-text` : Texte des liens\n- `rgaa/link-context` : Contexte des liens',
    '7-scripts': '- `rgaa/script-alternatives` : Alternatives aux scripts\n- `rgaa/script-controls` : Contrôles des scripts',
    '8-elements-obligatoires': '- `rgaa/doctype` : Type de document\n- `rgaa/lang-attribute` : Attribut de langue',
    '9-structure': '- `rgaa/heading-hierarchy` : Hiérarchie des titres\n- `rgaa/list-structure` : Structure des listes',
    '10-presentation': '- `rgaa/css-presentation` : Présentation CSS\n- `rgaa/focus-visible` : Focus visible',
    '11-formulaires': '- `rgaa/form-labels` : Étiquettes de formulaires\n- `rgaa/form-grouping` : Regroupement de champs',
    '12-navigation': '- `rgaa/navigation-systems` : Systèmes de navigation\n- `rgaa/skip-links` : Liens d\'évitement',
    '13-consultation': '- `rgaa/timing-controls` : Contrôles de timing\n- `rgaa/motion-controls` : Contrôles de mouvement'
  };
  return rules[id] || '- `rgaa/general` : Règles générales';
}

function getThematicBestPractices(id) {
  const practices = {
    '4-multimedia': '### Médias\n- **Alternatives** : Toujours fournir des alternatives\n- **Synchronisation** : Vérifier la synchronisation\n- **Contrôles** : Rendre les médias contrôlables',
    '5-tableaux': '### Tableaux\n- **Structure** : Utiliser la bonne structure HTML\n- **En-têtes** : Déclarer correctement les en-têtes\n- **Résumés** : Fournir des résumés pour les tableaux complexes',
    '6-liens': '### Liens\n- **Explicites** : Rendre les liens explicites\n- **Contexte** : Fournir le contexte nécessaire\n- **Navigation** : Faciliter la navigation',
    '7-scripts': '### Scripts\n- **Alternatives** : Fournir des alternatives\n- **Contrôles** : Rendre les scripts contrôlables\n- **Compatibilité** : Vérifier la compatibilité avec les TA',
    '8-elements-obligatoires': '### Structure\n- **HTML valide** : Utiliser un HTML valide\n- **Langue** : Déclarer la langue\n- **Titre** : Fournir un titre de page',
    '9-structure': '### Structure\n- **Hiérarchie** : Respecter la hiérarchie des titres\n- **Cohérence** : Maintenir la cohérence\n- **Landmarks** : Utiliser les landmarks ARIA',
    '10-presentation': '### Présentation\n- **CSS** : Utiliser CSS pour la présentation\n- **Responsive** : Concevoir responsive\n- **Focus** : Rendre le focus visible',
    '11-formulaires': '### Formulaires\n- **Étiquettes** : Associer les étiquettes aux champs\n- **Regroupement** : Regrouper les champs similaires\n- **Validation** : Fournir un feedback de validation',
    '12-navigation': '### Navigation\n- **Systèmes** : Fournir plusieurs systèmes de navigation\n- **Cohérence** : Maintenir la cohérence\n- **Évitement** : Fournir des liens d\'évitement',
    '13-consultation': '### Consultation\n- **Contrôles** : Rendre les contrôles accessibles\n- **Alternatives** : Fournir des alternatives\n- **Timing** : Contrôler les limites de temps'
  };
  return practices[id] || '### Général\n- **Accessibilité** : Penser à tous les utilisateurs\n- **Tests** : Tester avec des outils d\'accessibilité';
}

function getThematicConclusion(id) {
  const conclusions = {
    '4-multimedia': 'Les contenus multimédia doivent être accessibles à tous les utilisateurs.',
    '5-tableaux': 'Les tableaux doivent être correctement structurés pour être accessibles.',
    '6-liens': 'Les liens doivent être explicites et accessibles.',
    '7-scripts': 'Les scripts doivent être compatibles avec les technologies d\'assistance.',
    '8-elements-obligatoires': 'Les éléments obligatoires sont essentiels pour l\'accessibilité.',
    '9-structure': 'Une bonne structure facilite la navigation et la compréhension.',
    '10-presentation': 'La présentation ne doit pas être un obstacle à l\'accessibilité.',
    '11-formulaires': 'Les formulaires doivent être accessibles et utilisables par tous.',
    '12-navigation': 'La navigation doit être accessible et cohérente.',
    '13-consultation': 'La consultation doit être accessible à tous les utilisateurs.'
  };
  return conclusions[id] || 'Cette thématique est importante pour l\'accessibilité.';
}

function main() {
  const criteresDir = path.join(__dirname, '..', '..', 'doc', 'rgaa', 'criteres');
  
  if (!fs.existsSync(criteresDir)) {
    console.error('❌ Dossier criteres non trouvé:', criteresDir);
    process.exit(1);
  }
  
  console.log('🔍 Création des pages thématiques...');
  
  let created = 0;
  
  for (const thematic of thematicPages) {
    const thematicDir = path.join(criteresDir, thematic.id);
    const indexPath = path.join(thematicDir, 'index.md');
    
    // Créer le dossier s'il n'existe pas
    if (!fs.existsSync(thematicDir)) {
      fs.mkdirSync(thematicDir, { recursive: true });
    }
    
    // Créer la page d'index
    const content = createThematicPage(thematic);
    fs.writeFileSync(indexPath, content, 'utf8');
    
    console.log(`✅ Page créée: ${thematic.id} - ${thematic.title}`);
    created++;
  }
  
  console.log(`\n📊 Résumé:`);
  console.log(`✅ Pages créées: ${created}`);
  console.log(`📁 Total: ${thematicPages.length}`);
}

if (require.main === module) {
  main();
}

module.exports = { createThematicPage, thematicPages };
