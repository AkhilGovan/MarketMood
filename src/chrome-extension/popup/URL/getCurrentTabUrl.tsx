export async function getCurrentTabUrl(): Promise<URL| null> {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]?.url || null;
      if (url) {
        resolve(new URL(url));
      } else {
        resolve(null);
      }
    });
  });
}
