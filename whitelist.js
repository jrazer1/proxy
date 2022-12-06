var whitelist = [
 'localhost'
,'192.168.88.1'
,'003rt.ru'
,'2ch.hk'
,'2ch.life'
,'2gis.ru'
,'2ip.ru'
,'4pda.ru'
,'4pda.to'
,'alicdn.com'
,'_aliexpress.com'
,'_aliexpress.ru'
,'antitm.info'
,'apple.com'
,'apteka.ru'
,'aptekiplus.ru'
,'auchan.ru'
,'avito.ru'
,'banki.ru'
,'booru.org'
,'case-place.ru'
,'cdn-apple.com'
,'citaty.info'
,'citilink.ru'
,'cpu-world.com'
,'crunchyroll.com'
,'crypko.ai'
,'decathlon.ru'
,'deviantart.com'
,'drive2.ru'
,'drive.google.com'
,'ebay.com'
,'ebay.in'
,'eldorado.ru'
,'essensworld.ru'
,'evernote.com'
,'farmlend.ru'
,'google.com'
,'google.ru'
,'halvacard.ru'
,'hentai-cosplays.com'
,'hentai-gif-anime.com'
,'hentai-img.com'
,'hentailib.me'
,'icloud.com'
,'imgur.com'
,'i.imgur.com'
,'kassir.ru'
,'kimovil.com'
,'kinopoisk.ru'
,'lenta.com'
,'leroymerlin.ru'
,'letyshops.com'
,'mail.ru'
,'mangalib.me'
,'mcgrp.ru'
,'mediamarkt.com'
,'mega.io'
,'megafon.ru'
,'mts.ru'
,'mvideo.ru'
,'myanimelist.net'
,'mycdn.me'
,'netflix.com'
,'oldi.ru'
,'onlinetrade.ru'
,'otzovik.com'
,'ozon.ru'
,'petshop.ru'
,'pikabu.ru'
,'pochta.ru'
,'pornhub.com'
,'psbank.ru'
,'qiwi.ru'
,'rbt.ru'
,'re-store.ru'
,'rutube.ru'
,'sbermarket.ru'
,'solarisjapan.com'
,'sovcombank.ru'
,'sta.sh'
,'t.me'
,'tatarstan.ru'
,'telegram.org'
,'twitch.tv'
,'userapi.com'
,'vitaexpress.ru'
,'vk.com'
,'vtb.ru'
,'wallpaperflare.com'
,'ya.ru'
,'yandex.ru'
,'yandex.com'
,'youtube.com'
];

function FindProxyForURL(url, host) {
  if (!whitelist.some((elementOfWhitelist) => dnsDomainIs(host, elementOfWhitelist) === true) || !whitelist.some((elementOfWhitelist) => dnsDomainIs(host, 'www.' + elementOfWhitelist) === true))
    return "SOCKS5 localhost:1080; SOCKS localhost:1080; DIRECT"; // (IP:port)

  return "DIRECT";
}
