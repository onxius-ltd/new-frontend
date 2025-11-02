// pages/api/trustpilot-scrape.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const url = "https://www.trustpilot.com/review/majority.com";

      try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const reviews: { name: string; text: string; rating: string }[] = [];

            $(".review-card").each((_, el) => {
                  const name = $(el).find(".consumer-name").text().trim();
                  const text = $(el).find(".review-content__text").text().trim();
                  const rating = $(el).find("img.rating-star").attr("alt") || "";
                  reviews.push({ name, text, rating });
            });

            res.status(200).json(reviews);
      } catch (error) {
            res.status(500).json({ error: "Failed to fetch reviews" });
      }
}
