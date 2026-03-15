/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://onxius.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/admin/*",
    "/secret-page",
    "/sitemap.xml",   // don't list the sitemap itself as a URL
    "/robots.txt",    // don't list robots.txt as a URL
  ],
};
