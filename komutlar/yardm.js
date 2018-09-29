const Discord = require('discord.js');


exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
  .setDescription(`**${message.author.username}** İşte Komutlarım ! Mükemmel Değilmi Sencede ?`)

  .addField('**Komutlar :', '`C!banned :: Dene ve Gör :D`\n`C!avatarım :: Avatarınızı Atar `\n`C!ayrılıkgif :: ÇILGINLIK YAP BİÇIS`\n`C!balıktut :: Balık Tutarsın.`\n`C!ban :: İstediğiniz kişiyi sunucudan yasaklar.`\n`C!bilgi :: Bot ile ilgili bilgi verir.`\n`C!bot-hakkında :: bot-hakkında.`\n`C!davet :: Botun davet linkini gönderir.\n C!düello :: İstediğiniz bir kişi ile düello atarsınız! \n C!duyuru :: Güzel Bir Duyuru Görünümü Sağlar.\n C!el-hareketi      :: Botun pingini gösterir.\n C!fortnite :: Fortnite Başarımlarını Gösterir\nC!hedef :: hedef.\n C!herkesebendençay :: Herkese Çay Verir\nC!istatistik :: Botun istatistik gösterir.\nC!koş :: Koşarsınız.\n C!kullanıcıbilgim  :: Komutu kullanan kişi hakkında bilgi verir.\n C!load :: Yeni eklenen komutu yükler.\n C!mcyazdır :: Minecraftdan Başarım Kazanırsınz.\nC!oylama :: Oylama Yapar.\nC!oylama :: Oylama Yapar.\nC!reboot :: [Admin Komutu] \nC!reload :: İstediğiniz bir komutu yeniden başlatır.')
  .addField('**Komutlar:','C!roller :: Roller.\nC!sunucubilgi :: Sunucu hakkında bilgi verir.\nC!sunucular :: Bu Komut Gizlidir\nC!sunucuresmi :: Sunucu Resminin Linkini Atar.\nC!sustur :: İstediğiniz kişiyi  susturur.\nC!temizle          :: Belirlenen miktar mesajı siler.\nC!unban            :: İstediğiniz kişinin banını kaldırır.\nC!unload :: İstediğiniz bir komutu devre dışı bırakır.\nC!uyar :: İstediğiniz kişiyi uyarır.\nC!yapımcım :: Yapımcımı Atar.\nC!yardım           :: Tüm komutları gösterir.\nC!yaz-bot :: [Admin Komutu]\nC!yaz :: İstediğiniz şeyi bota yazdırır.\nC!yumruh-at :: Yumruk Atar.\nC!çayaşekerat :: Çaya Şeker Atar.\nC!çayiç :: Çay İçer.\nC!çekiç :: İstediğiniz Kişiye Çekiç Atarsınız.\nC!canlı :: Canlı Destek Ekibi.\nC!sunucutanıt :: Sunucunuzu Tanıtır.')
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  message.react('📮');
  message.author.send({embed});

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y','help','yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları listeler.',
  usage: 'yardım'
};
