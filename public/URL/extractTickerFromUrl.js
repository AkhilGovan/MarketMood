import { allTickers } from "../data/allTickers";
export function extractTickerFromUrl(url) {
    const pathParts = url.pathname.split("/");
    // Simple Paths /Ticker/
    for (const part of pathParts) {
        const cleaned = part.toUpperCase();
        if (allTickers.has(cleaned))
            return cleaned;
        // nasdaq-Ticker
        const dashParts = cleaned.split("-");
        for (const dp of dashParts) {
            if (allTickers.has(dp.toUpperCase()))
                return dp;
        }
    }
    // symbol=Ticker
    const symbolParam = url.searchParams.get("symbol");
    if (symbolParam === null || symbolParam === void 0 ? void 0 : symbolParam.includes(":")) {
        const optionSegment = symbolParam.split(":")[1];
        const match = optionSegment.match(/^[A-Z]+/);
        if (match) {
            const guess = match[0].toUpperCase();
            if (allTickers.has(guess))
                return guess;
        }
    }
    return null;
}
