import { allTickers } from "./data/allTickers.js";
import { getCurrentTab } from "./utils/tabs.js";

function extractTickerFromPath(pathname: string): string | null {
  const pathParts = pathname.split("/");

  for (const part of pathParts) {
    const cleaned = part.toUpperCase();
    if (allTickers.has(cleaned)) {
      return cleaned;
    }
  }

  return null;
}

async function run() {
  const currentTab = await getCurrentTab();
  if (!currentTab?.url) return;

  const url = new URL(currentTab.url);
  const ticker = extractTickerFromPath(url.pathname);

  if (ticker) {
    const resultDiv = document.getElementById("ticker-result");
    if (resultDiv) {
      resultDiv.textContent = `Ticker detected: ${ticker}`;
    }
  }
}

run();
