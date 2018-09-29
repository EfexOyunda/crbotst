const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji1 = message.client.emojis.get(':telephone_receiver: ');
const emoji2 = message.client.emojis.get(':telephone_receiver: ');
const emoji3 = message.client.emojis.get(':telephone_receiver: ');
const emoji4 = message.client.emojis.get(':telephone_receiver: ');
const emoji5 = message.client.emojis.get(':telephone_receiver: ');
const emoji6 = message.client.emojis.get(':telephone_receiver: ');
const emoji7 = message.client.emojis.get(':telephone_receiver: ');
      let isEnabled;
      message.reply("Canlı Destek. Birazdan Yetkili Ekibimiz sizinle ilgilenicektir.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "495629909285273631";
      const embed = new Discord.RichEmbed()
        .addField('Uyarı', `“ Canlı Destek`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek Ä°steyen**: ${message.author.tag} (${message.author.id}) \n**Destek MesajÄ±**: ${mesaj}`)
        .setFooter("Canlı Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('“Sohbete KAtılmak İçin **katıl** KApatmak için **kapat** yazın.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply(':telephone_receiver:  Çağrı Zaman Aşımına Uğradı.')
      if (reason === 'aborted') {
        message.reply('çağrı reddedildi.')
        client.channels.get(destekKanal).send(':telephone_receiver:  Başarıyla  reddedildi.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send(':telephone_receiver:  Destek çağrısı alındı!')
        client.channels.get(destekKanal).send(':telephone_receiver:  Destek çağrısını kapatmak için `kapat` yazınız.')
        chan.send(`${message.author}`)
        chan.send('çağrıya bir destek yetkili tarafından alındınız!')
        chan.send('En Yakın Zamanda Size Yardımcı Olacağız.')
        chan.send('Destek çağrısını kapatmak için `kapat` yazınız.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send(':telephone_receiver:  Çağrı Kapatıldı.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send(':telephone_receiver: Çağrı Karşı taraftan kapatıldı.')
              if (message.channel.id === destekKanal) chan.send(':telephone_receiver:  Çağrı KArşı taraftan kapatıldı.')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`ğŸ“ **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`ğŸ“ **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlı',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlÄ±destek'
};
