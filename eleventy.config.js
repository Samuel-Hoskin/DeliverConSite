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
    icons: {
      mask: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>',
      shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>',
      touch: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>',

    },
    footer:{
      contentLicence: {
        text: ' '
      },
      copyright: {
        text: ' '
      },
        meta:{
            items: [
                {
                  href: "/unconfrence",
                  text: "What is an Unconference?"
                },
                {
                  href: "/code-of-conduct",
                  text: "Code of Conduct"
                },
                {
                  href: "https://github.com/Samuel-Hoskin/DeliverConSite",
                  text: "GitHub Repo"
                },
              ],
              html: 'Built by <a href="#" class="govuk-footer__link">Samuel Hoskin</a>'
        },
        
        
    },
  })
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addTransform("injectAnalyticsScript", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        "</head>",
        `<script defer src="https://analytics.hoskin.dev/script.js" data-website-id="271420fa-f401-45c2-93b4-e5b7cd7d6aef"></script></head>`
      );
    }
    return content;
  });
  
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
