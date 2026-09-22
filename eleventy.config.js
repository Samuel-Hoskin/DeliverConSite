module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("dcDate", (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  eleventyConfig.addTransform("injectAnalyticsScript", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        "</head>",
        `<script defer src="https://analytics.hoskin.dev/script.js" data-website-id="271420fa-f401-45c2-93b4-e5b7cd7d6aef"></script></head>`
      );
    }
    return content;
  });

  eleventyConfig.addCollection("event", (collectionApi) =>
    collectionApi.getFilteredByTag("event").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("blog", (collectionApi) =>
    collectionApi.getFilteredByTag("blog").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("resource", (collectionApi) =>
    collectionApi.getFilteredByTag("resource").sort((a, b) => b.date - a.date)
  );

  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      includes: "_includes",
    },
  };
};
