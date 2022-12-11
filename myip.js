var whitelist = [
 'myip.ru'
];

function FindProxyForURL(url, host) {
  //. перед elementOfWhitelist и host нужна, чтобы dnsDomainIs не посчитала, что icloud.com входит в hentaicloud.com и всех подобных случаев
  if (!whitelist.some((elementOfWhitelist) => dnsDomainIs('.' + host, '.' + elementOfWhitelist) === true) && !whitelist.some((elementOfWhitelist) => dnsDomainIs(host, 'www.' + elementOfWhitelist) === true))
    return "SOCKS5 localhost:1080; SOCKS localhost:1080; DIRECT";

  return "DIRECT";
}
