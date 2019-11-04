//proxy.pac теперь реверсивный. Не проксируются только сайты из списка whitelist.
//Этот proxy.pac может не работать, когда провод воткнут напрямую в компьютер, через роутер все работает. Chrome и теперь приходится в любом случае заливать этот файл в веб. Удобно использовать для этого Github. Не все программы (после такой заливки, а мб и без нее) работают нормально с proxy.pac. Некоторые не могут выйти интернет, поэтому, лучше прописать адрес этого файла в вебе в расширение Proxy Switcher в Chrome, а в Firefox просто в настройки. В системных настройках ничего не прописывать.
//
//Максимальный размер PAC-файла для Google Chrome — 1 МБ. https://twitter.com/ValdikSS/status/959760944166514689
//У некоторых пользователей антизапрета не хватает лимита по оперативной памяти для обработки PAC-файла браузером https://twitter.com/ValdikSS/status/953385597699264512
//Может пригодиться: https://github.com/anticensority/runet-censorship-bypass
//Может пригодиться: https://github.com/anticensority/pac-script-generator
//Может пригодиться: Оптимизация PAC https://github.com/anticensority/runet-censorship-bypass/issues/13
//
//В некоторых случаях не  работает если return "PROXY адрес_прокси:3128; 127.0.0.1"; поэтому сделано return "PROXY адрес_прокси:3128; DIRECT";
//Ленивая загрузка (по крайней мере на санкаке) может отваливаться (при return "SOCKS 127.0.0.1:1080; DIRECT"; и return "SOCKS 127.0.0.1:1080"; и возможно других SOCKS-вариантах этой строки), если отрубить Bitvise, поскролить санкаку вниз, потом снова врубить Bitvise. Дальше санкака скроллиться не будет.
//Возможно, из-за DIRECT, иногда, некоторые ряды картинок на nhentai остаюся не прогруженными.
//
//Чтобы добавить youtube в whitelist необходимо добавить в него домены: "youtube.com", "googlevideo.com". Если добавить только youtube.com, то некоторые видео, например те, которые в Германии должны выдавать ошибку "Это видео содержит материалы от партнера ИМЯПАРНЕРА В вашей стране доступ к этим материалам не предоставляется" ошибку не покажут, но вместе с тем не будут воспроизводиться. (пример - https://www.youtube.com/watch?v=qHxebm8sLt0 через VPS в Германии (гуглу кажется, что США) выдает ошибку "Это видео содержит материалы от партнера Victor Entertainment, Inc.. В вашей стране доступ к этим материалам не предоставляется.")
//

function FindProxyForURL(url, host) {

  //для блокировки рекламы
  listToBlock = [
    "bongacams.com",
    "ero-advertising.com",
    "exoclick.com",
    "exosrv.com",	
    "juicyads.com",
  ];

  //proxy.pac теперь реверсивный. Не проксируются только сайты из списка ниже.
  whitelist = [
    /*
    "userapi.com",
    "vk.com",
    "vkuservideo.net",//официальный домен vk - исключить его из белого списка, чтобы избежать ошибку в некоторых видео (например, в https://vk.com/video-68431624_171119206) "источник не поддерживается" 
    */

    "003rt.ru",
    "2gis.ru",
    "2ip.ru",//чтобы смотреть реальный ip, для проверки работы прокси - myip.ru
    "4pda.ru",//т.к. 4pda просит ввести капчу для Falkenstein Hetzner
    "aliexpress.com",//чтобы не надо было вводить капчу
    "apteka.ru",
    "avito.ru",
    "case-place.ru",
    "citilink.ru",
    "cpu-world.com",//т.к. Access denied This IP address is blocked.
    "crunchyroll.com",//т.к. написано access denied с hetzner
    "crypko.ai",//т.к. Unavailable For Legal Reasons Sorry, this service is currently unavailable in your region. We are working hard to resolve this issue.
    "drive2.ru",//чтобы избежать ошибки 403 Forbidden при работе через VPS hetzner
    "ebay.com",
    "eldorado.ru",
    "google.com",//чтобы не надоедала рекапча, ограничение выдачи решать настройкой google.com на Соединенные Штаты
    "googlevideo.com",//для корректной работы youtube (см. примечание в начале .pac-файла)
    "kimovil.ru",//чтобы показывал совместимость с ру сетями
    "kinopoisk.ru",//т.к. из Германии сервер кинопоиска выдает ошибку 500
    "letyshops.com",
    "mediamarkt.ru",
    "mega.nz",//чтобы качать с МЕГИ на максимальной скорости (мб через прокси скорость получится такая же, как и напрямую, я не проверял)
    "mts.ru",
    "mvideo.ru",
    "onlinetrade.ru",
    "otzovik.com",//"Не удается получить доступ к сайту" через hetzner
    "ozon.ru",
    "paypal.com",
    "pikabu.ru",//чтобы избежать ошибки на пикабу: Ошибка 403. Доступ запрещен. Пожалуйста, проверьте компьютер на наличие вирусов.
    "pornhub.com",
    "psbank.ru",
    "qiwi.com",//чтобы не было проблем при пополнением киви с карты
    "rbt.ru",
    "rutube.ru",
    "solarisjapan.com",
    "twitch.tv",
    "yadi.sk",//чтобы качать с Я.Диска на максимальной скорости (мб через прокси скорость получится такая же, как и напрямую, я не проверял)
    "youtube.com",
  ];

  if (/\.(ru|co|cu|com|info|net|org|gov|edu|int|mil|biz|pp|ne|msk|spb|od|in|ho|cc|dn|i|tut|v|dp|sl)\.[^.]+$/.test(host))
    host = host.replace(/(.+)\.([^.]+\.[^.]+\.[^.]+$)/, "$2");
  else
    host = host.replace(/(.+)\.([^.]+\.[^.]+$)/, "$2");

  var oip = dnsResolve(host);
  var inwhitelist = "false";

  //для блокировки рекламы
  for (var i = 0; i < listToBlock.length; i++) {
    if (oip === 1 || host === listToBlock[i]) {
      return "PROXY 127.0.0.1";
    }
  }

  //для проксирования
  for (var i = 0; i < whitelist.length; i++) {
    if (oip === 1 || host === whitelist[i]) {
      inwhitelist = "true";
    }
  }

  if (inwhitelist == "true" || inwhitelist === "true")
  {
    return "DIRECT";
  }

  //return "HTTPS xxx.ddns.net:3128; "PROXY xxx.ddns.net:3128; DIRECT"; //- неправильно, Firefox выдает ошибку SSL, Chrome, вроде, работает нормально, мб нужно поставить " после "HTTPS xxx.ddns.net:3128
  //return "PROXY xxx.ddns.net:3128; DIRECT"; //для прокси
  //return "SOCKS 127.0.0.1:1080; DIRECT"; //для SSH не правильно, т.к. надо DIRECT убрать, т.к. когда отваливается SSH и потом поднимается снова, Chrome все равно идет на DIRECT. Если использовать SQUID или другой прокси на VPS, то лучше писать DIRECT, т.к. вроде как бывали случаи, когда без него работало некорректно и, прокси, в отличии от SSH во время работы не отваливался.
  //return "SOCKS 127.0.0.1:1080"; //для Bitvise SSH Client 
  return "SOCKS5 127.0.0.1:1080";//для SOCKS5 в т.ч. Shadow Socks
  //если будет отваливаться SSH попробовать return "SOCKS 127.0.0.1:1080; 127.0.0.1"; и Always reconnect automatically в BitviseSSHClient
  
}
