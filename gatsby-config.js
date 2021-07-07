module.exports = {
  siteMetadata: {
    siteUrl: "https://erin.computer",
    title: 'Erin Marchak | Web Developer | Team Lead',
    description: 'Erin has over a decade of experience with both server- and client-side web development, specializing in digital marketing. She\'s an Agile evangelist that encourages teams to allow their curiosity to drive them and is passionate about creating emotional connections with people through technology.',
    author: '@emarchak',
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-149006221-1",
        head: false,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `share tech mono`,
          `source sans pro`
        ],
        display: 'swap'
      }
    }
  ],
};
