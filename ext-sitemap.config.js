/** @type {import('next-sitemap').IConfig} */
module.exports = {
      siteUrl: "https://onxius.com",    // trailing slash removed to avoid duplicate URLs
      generateRobotsTxt: true,
      changefreq: "weekly",             // updated from monthly
      priority: 0.7,
      sitemapSize: 5000,
      exclude: [
            "/admin/*",
            "/secret-page",
            "/sitemap.xml",             // prevents sitemap.xml appearing as a page URL
            "/robots.txt",              // prevents robots.txt appearing as a page URL
      ],
};
