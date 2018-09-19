const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, msg, args) => {

  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Hediyye kutu Geldi.", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);

  if(title.length > 22 || contents.length > 22) return msg.edit("Max Length: 22 Characters. Soz.").then(msg.delete.bind(msg), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=3&h=Basarim+Kazandin+%21&t=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));
  msg.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mchediye"]
};

exports.help = {
  name: 'mcyazdır',
  description: 'Minecraftdan Başarım Kazanırsınz.',
  usage: 'mcyazdır'
};
