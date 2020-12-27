require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `Eka's website`,
    siteTitleAlt: `Eka's website`,
    siteHeadline: `Eka Prasetia - Personal website @dannyeka`,
    siteUrl: `https://ekaprasetia.com`,
    siteDescription: `Personal website and blog frontend development Javascript and React.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@dannyeka`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/dannyeka`,
          },
          {
            name: `Github`,
            url: `https://github.com/ekaone`,
          },
        ],
        feed: true,
        feedTitle: "Eka's website",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-S5GV45GCQZ",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // // Setting this parameter is optional
        anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Defers execution of google analytics script after page load
        // defer: false,
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eka's website`,
        short_name: `Eka-Website`,
        description: `Personal website and blog frontend development Javascript and React.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
