import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'eslint-plugin-rgaa',
  description: 'Linter ESLint pour valider les critères du Référentiel Général d\'Amélioration de l\'Accessibilité (RGAA)',
  
  // Configuration de base
  base: '/eslint-plugin-rgaa/',
  
  // Configuration du thème
  themeConfig: {
    // Logo
    logo: '/logo.svg',
    
    // Navigation principale
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Critères RGAA', link: '/rgaa/' },
      { text: 'Contribuer', link: '/contributing' }
    ],
    
    // Sidebar
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Accueil', link: '/' },
            { text: 'Guide d\'utilisation', link: '/guide' },
            { text: 'Contribuer', link: '/contributing' }
          ]
        },
        {
          text: 'Critères RGAA',
          items: [
            { text: 'Vue d\'ensemble', link: '/rgaa/' }
          ]
        }
      ],
      '/rgaa/': [
        {
          text: 'RGAA - Vue d\'ensemble',
          items: [
            { text: 'Introduction', link: '/rgaa/' }
          ]
        },
        {
          text: 'Critères par thématique',
          items: [
            { 
              text: '1. Images', 
              link: '/rgaa/criteres/1-images/',
            },
            { text: '2. Cadres', link: '/rgaa/criteres/2-cadres/' },
            { text: '3. Couleurs', link: '/rgaa/criteres/3-couleurs/' },
            { text: '4. Multimédia', link: '/rgaa/criteres/4-multimedia/' },
            { text: '5. Tableaux', link: '/rgaa/criteres/5-tableaux/' },
            { text: '6. Liens', link: '/rgaa/criteres/6-liens/' },
            { text: '7. Scripts', link: '/rgaa/criteres/7-scripts/' },
            { text: '8. Éléments obligatoires', link: '/rgaa/criteres/8-elements-obligatoires/' },
            { text: '9. Structure', link: '/rgaa/criteres/9-structures/' },
            { text: '10. Présentation', link: '/rgaa/criteres/10-presentation/' },
            { text: '11. Formulaires', link: '/rgaa/criteres/11-formulaires/' },
            { text: '12. Navigation', link: '/rgaa/criteres/12-navigation/' },
            { text: '13. Consultation', link: '/rgaa/criteres/13-consultation/' }
          ]
        },
        {
          text: 'Ressources',
          items: [
            { text: 'FAQ', link: '/rgaa/faq/' },
            { text: 'Glossaire', link: '/rgaa/glossaire/' }
          ]
        }
      ]
    },
    
    // Liens sociaux
    socialLinks: [
      { icon: 'github', link: 'https://github.com/renaudheluin/eslint-plugin-rgaa' }
    ],
    
    // Footer
    footer: {
      message: 'Développé avec ❤️ pour améliorer l\'accessibilité web en France',
      copyright: 'Copyright © 2024 Renaud Heluin'
    },
    
    // Recherche
    search: {
      provider: 'local'
    }
  },
  
  // Configuration Markdown
  markdown: {
    lineNumbers: true
  }
})
