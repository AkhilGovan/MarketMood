import { getCurrentTab } from "./utils/tabs.js";
import { extractTickerFromUrl } from "./RetrieveTickers/extractTickerFromUrl.js";


async function run() {
  const currentTab = await getCurrentTab();
  if (!currentTab?.url) return;

  const url = new URL(currentTab.url);
  const ticker = extractTickerFromUrl(url);

  if (ticker) {
    const resultDiv = document.getElementById("ticker-result");
    if (resultDiv) {
      resultDiv.textContent = `Ticker detected: ${ticker}`;
    }
  }
}

run();
