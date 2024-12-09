// Just my own little pac-script to bypass some censorship
const PROXY = "45.85.161.202:8000";

const HOSTNAMES = [
    "rutracker.org",
    "etahub.com",
    "pornhub.com",
    "rt.pornhub.com",
    "cdn.oaistatic.com",
    "store.steampowered.com",
    "ytimg.com",
    "bing.com",
    "openai.com",
    "phncdn.com",
    "msn.com",
    "habr.com",
    "xvideos.com",
    "ggpht.com",
    "chatgpt.com",
    "gelbooru.com",
    "4pda.to",
    "steamuserimages-a.akamaihd.net",
    "2ip.ru",
];

function FindProxyForURL(url, host) {
    host = host.replace(/^\.+|\.+$/g, '');

    for (let i = 0; i < HOSTNAMES.length; i++) {
        if (dnsDomainIs(host, HOSTNAMES[i])) {
            return `PROXY ${PROXY}`;
        }
    }

    return "DIRECT";
}
