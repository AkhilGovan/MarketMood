"use strict";
// import { allTickers } from "../data/allTickers";
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   const currentTab = tabs[0];
//   if (currentTab && currentTab.url) {
//     const url = new URL(currentTab.url);
//     // Split URL
//     const pathParts = url.pathname.split("/");
//     // Loop through each part, look for match
//     for (const part of pathParts) {
//       const cleaned = part.toUpperCase();
//       if (allTickers.has(cleaned)) {
//         console.log("Found real ticker in URL:", cleaned);
//         const el = document.createElement("p");
//         el.textContent = `Ticker detected: ${cleaned}`;
//         document.body.appendChild(el);
//         break;
//       }
//     }
//   }
// });
