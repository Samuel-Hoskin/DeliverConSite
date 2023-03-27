const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    fontFamily: "Arial",
    header: {
        organisationName: 'DeliverCon',
        organisationLogo: false,
        navigation: [
            {
              href: "#",
              text: "Navigation item 1",
              active: true
            },
            {
              href: "#",
              text: "Navigation item 2"
            },
            {
              href: "#",
              text: "Navigation item 3"
            },
            {
              href: "#",
              text: "Navigation item 4"
            }
          ]
    },
    footer:{
        meta:{
            items: [
                {
                  href: "#",
                  text: "Privacy Policy"
                },
                {
                  href: "#",
                  text: "Code of Conduct"
                },
              ],
              html: 'Built by <a href="#" class="govuk-footer__link">Samuel Hoskin</a>'
        }
    },
  })
  eleventyConfig.addPassthroughCopy("assets");
  
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // Use layouts from the plugin
      layouts: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    }
  }
};
