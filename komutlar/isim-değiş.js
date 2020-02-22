const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client()
exports.run = async (client, message, args) => {
    if (args[0] != 'aç' && args[0] != 'kapat' && args[0] != 'isimayar') return message.channel.send(':no_entry: Sistemi kullanabilmek için: `aç & kapat`')
    else {
        if (args[0] == 'aç') {
            var a = db.fetch(`nickdüzeltenk_${message.guild.id}`)
            var abul = message.guild.channels.find('id', a)
            if (!abul) {
                message.guild.createChannel(`isim-düzeltme-log`, 'text', [
                    {
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES'],
                        deny: ['VIEW_CHANNEL']
                    }
                ]).then(a => {
                    db.set(`nickdüzeltenk_${message.guild.id}`, a.id)
                    const uyari = new Discord.RichEmbed()
                        .setAuthor('Uyarı')
                        .setDescription('İsim düzeltme sistemi başarıyla açıldı.')
                        .setColor('GREEN')
                    message.channel.send(uyari)
                })
            } else {
                const uyari = new Discord.RichEmbed()
                    .setAuthor('Uyarı')
                    .setDescription('Zaten bu sistem sizde var.')
                    .setColor('RED')
                message.channel.send(uyari)
            }
        } else {
            if (args[0] == 'kapat') {
                var a = db.fetch(`nickdüzeltenk_${message.guild.id}`)
                var abul = message.guild.channels.find('id', a)
                if (!abul) {
                    const uyari = new Discord.RichEmbed()
                        .setAuthor('Uyarı')
                        .setDescription('Sistem zaten kapalı.')
                        .setColor('RED')
                    message.channel.send(uyari).then(b => {
                        db.delete(`nickdüzeltenk_${message.guild.id}`)
                    })
                } else {
                    abul.delete()
                    const uyari = new Discord.RichEmbed()
                        .setAuthor('Uyarı')
                        .setDescription('İsim düzeltme sistemi başarıyla kapatıldı')
                        .setColor('GREEN')
                    message.channel.send(uyari)
                }
            } else {
                if (args[0] == 'isimayar') {
                
                var a = args.slice(1).join(' ')
                if(!a){
                    const uyari = new Discord.RichEmbed()
                    .setAuthor('Uyarı')
                    .setDescription('Hiç bir şey girmediniz.')
                    .setColor('RED')
                message.channel.send(uyari)
                } else {
                    if(args[0] == 'isimayar'){
                        if(a == 'sıfırla'){
                            db.delete(`isimdüzeltI_${message.guild.id}`)
                            const uyari = new Discord.RichEmbed()
                            .setAuthor('Başarılı')
                            .setDescription('Nick düzeltme sistemi başarıyla sıfırlandı ve ``Bozuk nick`` olarak ayarlandı.')
                            .setColor('GREEN')
                        message.channel.send(uyari)
                        } else {
                            db.set(`isimdüzeltI_${message.guild.id}` , a)
                            const uyari = new Discord.RichEmbed()
                            .setAuthor('Başarılı')
                            .setDescription(a + ' olarak başarıyla ayarlandı.')
                            .setColor('GREEN')
                        message.channel.send(uyari)
                        }
                    }
                }
                }
            }
        }

    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: "isimdegis",
    description: 's',
    usage: 's'
};