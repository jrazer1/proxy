function FindProxyForURL(url, host) {
  return "SOCKS5 localhost:1080; SOCKS localhost:1080; DIRECT";
}
