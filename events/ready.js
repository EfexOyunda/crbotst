const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');
var prefix = ayarlar.prefix;

module.exports = client => {
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
  .set('Authorization', api)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
console.log('》Oynuyor kısmı başarıyla güncellendi.');
console.log('》Hazırım !');

    var Games = [

        "》C.yardım |C.canlı《",
        "》Yapımcım : JJF2|A-Efe#8626《",
        "》7/24 Aktif ",      


        `》${client.guilds.size}《 Sunucuda Bulunuyorum !`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/azeriiteammurad");
        }, 2 * 2500);

};
