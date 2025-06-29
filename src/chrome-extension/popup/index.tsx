import { useEffect, useState } from "react";
import { getCurrentTabUrl } from "./URL/getCurrentTabUrl";
import { extractTickerFromUrl } from "./URL/findTicker";

export function Popup() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [ticker, setTicker] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUrl() {
      const url = await getCurrentTabUrl();
      setCurrentUrl(url ? url.toString() : null);
    }
    fetchUrl();
  }, []);

  useEffect(() => {
    if (currentUrl) {
      const urlObj = new URL(currentUrl);
      setTicker(extractTickerFromUrl(urlObj));
    } else {
      setTicker(null);
    }
  }, [currentUrl]);

  return (
    <div>
      <h1>MarketMood</h1>
      {currentUrl ? (
        <p>Current URL: {currentUrl}</p>
      ) : (
        <p>Loading current tab URL...</p>
      )}
      <div>
        Ticker Symbol Found!
        {ticker}
      </div>
    </div>
  );
}
