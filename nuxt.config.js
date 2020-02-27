const pkg = require('./package')

import { aerieCaseStudies } from './assets/configs/aerie-case-studies.json'
import { alexaCaseStudies } from './assets/configs/alexa-case-studies.json'
import { endoMensHealthCaseStudies } from './assets/configs/emh-case-studies.json'
import { endoCaseStudies } from './assets/configs/endo-case-studies.json'
import { entellusCaseStudies } from './assets/configs/entellus-case-studies.json'
import { geoblueCaseStudies } from './assets/configs/geoblue-case-studies.json'
import { ikeaCaseStudies } from './assets/configs/ikea-case-studies.json'
import { inrikiCaseStudies } from './assets/configs/inriki-case-studies.json'
import { ipipelineCaseStudies } from './assets/configs/ipipeline-case-studies.json'
import { joeHandCaseStudies } from './assets/configs/joe-hand-case-studies.json'
import { jspCaseStudies } from './assets/configs/jsp-case-studies.json'
import { merionRealtyCaseStudies } from './assets/configs/mcr-case-studies.json'
import { metuchenCaseStudies } from './assets/configs/metuchen-case-studies.json'
import { patravelCaseStudies } from './assets/configs/patravel-case-studies.json'
import { radicavaCaseStudies } from './assets/configs/radicava-case-studies.json'
import { tunnellCaseStudies } from './assets/configs/tunnell-case-studies.json'
import { usarlCaseStudies } from './assets/configs/usarl-case-studies.json'
import { walmartCaseStudies } from './assets/configs/walmart-case-studies.json'
import { xdcCaseStudies } from './assets/configs/xdc-case-studies.json'
import { xpdCaseStudies } from './assets/configs/xpd-case-studies.json'
let dynamicRoutes = () => {
  let caseStudies = aerieCaseStudies.concat(alexaCaseStudies, endoMensHealthCaseStudies, endoCaseStudies, entellusCaseStudies, geoblueCaseStudies, ikeaCaseStudies, inrikiCaseStudies, ipipelineCaseStudies, joeHandCaseStudies, jspCaseStudies, merionRealtyCaseStudies, metuchenCaseStudies, patravelCaseStudies, radicavaCaseStudies, tunnellCaseStudies, usarlCaseStudies, walmartCaseStudies, xdcCaseStudies, xpdCaseStudies)
  return new Promise(resolve => {
    resolve(caseStudies.map(el => `case-studies/${el.title.toLowerCase().replace(/[.\s]/g, '-').replace(/[&#,+()$~%'":*?<>{}]/g, '' )}`))
  })
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'morsecodemedia.com' },
      { name: 'msapplication-TileColor', content: 'FFFFFF' },
      { name: 'msapplication-TileImage', content: '/favicon/mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: '/favicon/mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/favicon/mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/favicon/mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/favicon/mstile-310x310.png' },
      { hid: 'description', name: 'description', content: 'description' }
    ],
    link: [
      { rel: 'author', href:'/humans.txt' },
      { rel: 'manifest', href:'/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon/favicon-196x196.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon/favicon-128.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/favicon/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/favicon/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/favicon/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/favicon/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/favicon/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/favicon/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/favicon/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/favicon/apple-touch-icon-152x152.png' }
    ]
  },

  /*
  ** Generate Dynamic Routes for Static Build
  */
  generate: {
    routes: dynamicRoutes
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#333',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/localStorage', ssr: false },
    { src: '~/plugins/axe', ssr: false },
    { src: '~/plugins/siema', ssr: false}
  ],

  /*
  ** Server Middleware Awesomeness
  */
  serverMiddleware: [ '~/api/index' ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/dotenv', {
      path: '/',
      filename: '.env'
    }],
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-5476316-1'
    }],
    '@nuxtjs/style-resources',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
    'nuxt-imagemin',
    '@nuxtjs/redirect-module',
    'nuxt-webfontloader'
  ],

  webfontloader: {
    google: {
      families: ['Karla','Montserrat:400,700']
    }
  },

  redirect: [
    // Basic Pages
    { from: '^/who-i-am(\/)?$', to: '/about/', statusCode: 301 },
    { from: '^/contact-me(\/)?$', to: '/contact/', statusCode: 301 },

    // Case Studies
    { from: '^/case-studies/ipipeline-responsive-website(\/)?$', to: '/case-studies/ipipeline/', statusCode: 301 },
    { from: '^/case-studies/epp-expanded-polypropylene-responsive-website(\/)?$', to: '/case-studies/epp-com/', statusCode: 301 },
    { from: '^/case-studies/geoblue-travel-insurance-desktop-website(\/)?$', to: '/case-studies/geoblue-travel-health-insurance-desktop/', statusCode: 301 },
    { from: '^/case-studies/wal-mart-subscription-boxes-responsive-websites(\/)?$', to: '/case-studies/walmart-baby-subscription-box/', statusCode: 301 },
    { from: '^/case-studies/tunnell-consulting-responsive-website(\/)?$', to: '/case-studies/tunnell-consulting/', statusCode: 301 },
    { from: '^/case-studies/patravel-responsive-website(\/)?$', to: '/case-studies/pa-travel/', statusCode: 301 },
    { from: '^/case-studies/merion-commercial-realty-inc-responsive-website(\/)?$', to: '/case-studies/merion-commercial-realty/', statusCode: 301 },

    // Blog
    { from: '^/publications(\/)?$', to: 'https://blog.morsecodemedia.com/', statusCode: 301 },
    { from: '^/publications/internetology-101(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/beyond-keywords-and-meta-data-the-developers-seo(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/is-it-time-to-drop-support-for-ie8-part-ii(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/choosing-a-cms-solution-for-your-website(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/why-build-a-custom-404-error-page(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/is-it-time-to-drop-support-for-ie8-part-i(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/what-is-the-hour-of-code(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/wordpress-our-love-hate-relationship(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 },
    { from: '^/publications/wordpress-security-tips-cryptanaltic-attacks(\/)?$', to: 'https://blog.morsecodemedia.com/article/', statusCode: 301 }
  ],

  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_typography.scss'
    ]
  },

  axios: {
    baseURL: 'http://localhost:3000',
    debug: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
