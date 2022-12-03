function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  if (dnsDomainIs(host, "2ip.ru"))
    return "SOCKS5 localhost:1080; SOCKS localhost:1080; DIRECT"; // (IP:port)

  return "DIRECT";
}