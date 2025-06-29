import { useEffect, useState } from "react";
import { getCurrentTabUrl } from "./URL/getCurrentTabUrl";

export function Popup() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUrl() {
      const url = await getCurrentTabUrl();
      setCurrentUrl(url);
    }
    fetchUrl();
  }, []);

  return (
    <div>
      <h1>MarketMood</h1>
      {currentUrl ? (
        <p>Current URL: {currentUrl}</p>
      ) : (
        <p>Loading current tab URL...</p>
      )}
    </div>
  );
}
