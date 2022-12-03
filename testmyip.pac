function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  if (dnsDomainIs(host, "myip.ru"))
    return "SOCKS5 localhost:1080; SOCKS localhost:1080; DIRECT"; // (IP:port)

  return "DIRECT";
}