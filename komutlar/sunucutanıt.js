const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  var channel = client.channels.find('id', '495637824997949465')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» Poly | Sunucu Tanıt")
  .setDescription("**Sunucun Tanıtıldı » https://discord.gg/jxyr6UZ**")
  .setFooter("Sunucu Tanıtıldı")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Crystal | Sunucu Tanıt")
  .addField('**» Tanıtan: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['st'],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanıt',
  description: '',
  usage: 'sunucutanıt'
};
