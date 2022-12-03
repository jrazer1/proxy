var whitelist = ['2ip.ru', 'myip.ru'];

function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  if (['2ip.ru', 'myip.ru'].indexOf(host) >= 0)
    return "SOCKS5 localhost:1080"; // (IP:port)
  return "DIRECT";
}
