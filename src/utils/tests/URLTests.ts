import { extractTickerFromUrl } from "./ticker.js";

const mockAllTickers = new Set(["TSLA", "AAPL", "SPY", "NVDA", "PCYO", "X"]);
(globalThis as any).allTickers = mockAllTickers;

describe("extractTickerFromUrl", () => {
    const cases: [string, string | null][] = [
        ["https://example.com/stocks/TSLA", "TSLA"],
        [
            "https://www.tradingview.com/chart/q39J9c5U/?symbol=OPRA%3ASPY250505C250.0",
            "SPY",
        ],
        ["https://finance.yahoo.com/quote/SPY250505C00330000/", "SPY"],
        [
            "https://simplywall.st/stocks/us/utilities/nasdaq-pcyo/pure-cycle",
            "PCYO",
        ],
        ["https://example.com/stocks/X", "X"],
        ["https://random.com/company/banana", null],
        ["https://example.com", null],
    ];

    it.each(cases)("extracts %s → %s", (urlStr, expected) => {
        const url = new URL(urlStr);
        const result = extractTickerFromUrl(url);
        expect(result).toBe(expected);
    });
});
