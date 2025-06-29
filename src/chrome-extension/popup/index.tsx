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
    <div className="min-w-[300px] p-4 bg-white text-gray-800">
      <h1 className="text-xl font-bold mb-2 text-blue-600">📈 MarketMood</h1>

      {currentUrl ? (
        <p className="text-sm text-gray-600 break-all">
          <span className="font-semibold text-gray-700">URL:</span> {currentUrl}
        </p>
      ) : (
        <p className="text-sm text-gray-500">Loading current tab URL...</p>
      )}

      <div className="mt-4 p-3 rounded-md border border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-700 mb-1">Detected Ticker Symbol:</p>
        {ticker ? (
          <span className="text-lg font-semibold text-green-600">{ticker}</span>
        ) : (
          <span className="text-sm text-gray-500">No ticker detected on this page.</span>
        )}
      </div>
    </div>
  );
}
