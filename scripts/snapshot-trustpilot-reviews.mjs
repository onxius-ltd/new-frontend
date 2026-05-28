import axios from "axios";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const REVIEW_URL = "https://uk.trustpilot.com/review/www.onxius.com";
const MIRROR_PREFIX = "https://r.jina.ai/http://";
const OUTPUT_RELATIVE_PATH = "src/data/trustpilot-reviews.json";
const MAX_REVIEWS = 5;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputPath = path.resolve(rootDir, OUTPUT_RELATIVE_PATH);

function uniqueById(reviews) {
  const seen = new Set();
  return reviews.filter((review) => {
    if (seen.has(review.id)) return false;
    seen.add(review.id);
    return true;
  });
}

async function fetchMirrorMarkdown(url) {
  const mirrorUrl = `${MIRROR_PREFIX}${url.replace(/^https?:\/\//, "")}`;
  const { data } = await axios.get(mirrorUrl, {
    timeout: 25000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    },
  });
  return String(data);
}

function extractReviewLinks(markdown) {
  const matches = [
    ...markdown.matchAll(
      /##\s+\[([^\]]+)\]\((https?:\/\/uk\.trustpilot\.com\/reviews\/[^\)]+)\)/g
    ),
  ];

  return matches.map((match) => ({
    title: match[1].trim(),
    url: match[2].trim(),
  }));
}

async function extractReviewDetails(review) {
  const markdown = await fetchMirrorMarkdown(review.url);
  const lines = markdown.split(/\r?\n/).map((line) => line.trim());

  const ratingLine =
    lines.find((line) => /rated\s+\d+(\.\d+)?\s+out of 5 stars/i.test(line)) ||
    "";
  const ratingMatch = ratingLine.match(/rated\s+(\d+(\.\d+)?)\s+out of 5 stars/i);
  const rating = ratingMatch ? Number(ratingMatch[1]) : 0;

  const authorLine = lines.find((line) =>
    /^\[[^\]]+\s+\d+\s+review/i.test(line)
  );
  const authorMatch = authorLine?.match(/^\[([^\]]+?)\s+\d+\s+review/i);
  const author = authorMatch ? authorMatch[1].trim() : "Anonymous";

  const dateLine = lines.find((line) =>
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},\s+\d{4}$/i.test(
      line
    )
  );

  const bodyStart = lines.findIndex((line) => line.startsWith("## ["));
  const bodyLines = [];
  for (let i = bodyStart + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line) continue;
    if (/^\d{1,2}\s+[A-Za-z]+\s+\d{4}$/.test(line)) break;
    if (/^Unprompted review$/i.test(line)) break;
    if (line.startsWith("* * *")) break;
    if (/^Useful$/i.test(line)) break;
    bodyLines.push(line);
  }

  const text = bodyLines.join(" ").trim();
  const date = dateLine || "";

  return {
    id: `${author}-${date}-${review.title}`.replace(/\s+/g, "-").toLowerCase(),
    author,
    title: review.title,
    text,
    rating,
    date,
    sourceUrl: review.url,
  };
}

async function main() {
  const markdown = await fetchMirrorMarkdown(REVIEW_URL);
  const links = extractReviewLinks(markdown).slice(0, 20);

  const details = [];
  for (const review of links) {
    try {
      const parsed = await extractReviewDetails(review);
      if (parsed.text) details.push(parsed);
    } catch {
      // Skip individual review parse failures.
    }
  }

  const curated = uniqueById(details)
    .filter((review) => review.rating >= 4)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, MAX_REVIEWS);

  await fs.writeFile(outputPath, `${JSON.stringify(curated, null, 2)}\n`, "utf8");

  console.log(
    `Saved ${curated.length} reviews (rating >= 4) to ${OUTPUT_RELATIVE_PATH}`
  );
}

main().catch((error) => {
  console.error("Failed to snapshot Trustpilot reviews:", error?.message || error);
  process.exit(1);
});

