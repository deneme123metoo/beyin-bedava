const Discord = require('discord.js');
const ms = require('ms');

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MANAGE_ROLES")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Rolleri yönet` yetkisine sahip olmalısın")
    let user = message.mentions.users.first();
    if(!user) return message.reply("Kullanıcı belirtmen lazım")
    let role = message.metions.roles.first();
    if(!role) return message.reply("Rol belirtmen lazım")
    let süre = args[2];
    if(!süre) return message.reply("Süre belirtmen lazım")

    user.addRole(role.id)
    message.reply("Kullanıcıya rol verildi")
    
    setTimeout(() => {
    
        user.removeRole(role.id)
        message.channel.send(user + " süreli rolün doldü")

    }, ms(süre))
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sürelirol'],
    permLevel: 0
};
  
  exports.help = {
    name: 'süreli-rol',
    description: 'Etiketlenen kullanıcıya etiketlenen rolü verir.',
    usage: 'sürelirol <@kullanıcı> <@rol> <süre>'
};
