var whitelist = ['2ip.ru', 'myip.ru'];

function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  if (whitelist.includes(host))
    return "SOCKS5 localhost:1080; DIRECT"; // (IP:port)
  return "DIRECT";
}