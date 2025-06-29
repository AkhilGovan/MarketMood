import { allTickers } from "../../../data/allTickers";

export function extractTickerFromUrl(url: URL): string | null {
  // Extract all URL parts
  const candidates: string[] = [];

  // Get path segments
  candidates.push(...url.pathname.toUpperCase().split("/").filter(Boolean));

  // Also try splitting dash-separated parts for sites like simplywall.st
  url.pathname.toUpperCase().split("/").forEach(segment => {
    candidates.push(...segment.split("-"));
  });

  // Check search params
  url.searchParams.forEach(value => {
    // Split on colon for TradingView style (NASDAQ:AAPL)
    value.toUpperCase().split(":").forEach(part => {
      candidates.push(part);
    });
  });

  // Check each candidate against ticker set
  for (const candidate of candidates) {
    const cleaned = candidate.replace(/[^A-Z]/g, ""); // remove digits/punctuation
    if (cleaned.length >= 1 && allTickers.has(cleaned)) {
      return cleaned;
    }
  }

  return null;
}
