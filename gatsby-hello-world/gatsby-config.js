module.exports = {
  siteMetadata: {
    title: 'Gatsby',
    siteUrl: 'https://www.gatsbyjs.org',
    description: 'Blazing fast modern site generator for React',
  },
  plugins: [
    'gatsby-plugin-typography',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
