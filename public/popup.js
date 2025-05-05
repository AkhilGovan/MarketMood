var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { allTickers } from "./data/allTickers.js";
import { getCurrentTab } from "./utils/tabs.js";
function extractTickerFromPath(pathname) {
    const pathParts = pathname.split("/");
    for (const part of pathParts) {
        const cleaned = part.toUpperCase();
        if (allTickers.has(cleaned)) {
            return cleaned;
        }
    }
    return null;
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentTab = yield getCurrentTab();
        if (!(currentTab === null || currentTab === void 0 ? void 0 : currentTab.url))
            return;
        const url = new URL(currentTab.url);
        const ticker = extractTickerFromPath(url.pathname);
        if (ticker) {
            const resultDiv = document.getElementById("ticker-result");
            if (resultDiv) {
                resultDiv.textContent = `Ticker detected: ${ticker}`;
            }
        }
    });
}
run();
