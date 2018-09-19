const Discord = require("discord.js")
exports.run =  function (bot, message) {
      if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setDescription('HATA')
  return message.author.sendEmbed(ozelmesajuyari); }
    const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`${guild.name} (${guild.owner.user.username}#${guild.owner.user.discriminator} (${guild.owner.user.id})) - ${guild.memberCount}`, guild.id);
      embed.setColor(0xff0000)
      embed.setTitle('Servers')
      embed.setDescription(`**İndi __[${bot.guilds.size}]__ Sunucu'da Varım.**`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucular'],
  permLevel: 2
};

exports.help = {
  name: 'sunucular',
  description: 'Bu Komut Gizlidir',
  usage: 'sunucular'
};
