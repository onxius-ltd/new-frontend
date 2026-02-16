/** @type {import('next-sitemap').IConfig} */
module.exports = {
      siteUrl: "https://onxius.com/", // Replace with your actual domain
      generateRobotsTxt: true,           // (optional) generate robots.txt
      changefreq: "monthly",
      priority: 0.7,
      sitemapSize: 5000,                 // optional: split sitemap if too large
      exclude: ["/admin/*", "/secret-page"], // optional: pages to exclude
};
