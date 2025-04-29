import { allTickers } from "./data/allTickers";

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentTab = tabs[0];
  if (currentTab && currentTab.url) {
    const url = new URL(currentTab.url);
    const pathParts = url.pathname.split("/");

    for (const part of pathParts) {
      const cleaned = part.toUpperCase();
      if (allTickers.has(cleaned)) {
        const resultDiv = document.getElementById("ticker-result");
        if (resultDiv) {
          resultDiv.textContent = `Ticker detected: ${cleaned}`;
        }
        break;
      }
    }
  }
});
