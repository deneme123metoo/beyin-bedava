const Discord = require('discord.js')
let prefix = 'p!'
module.exports = client => {
  
  const aktiviteListesi = [

        "💪 7/24 Aktif!",  
        "💡 p!davet | Botumuzu ekleyin",
        "👨 1.000 Kullanıcı!",
        "🌍 50 Sunucuda Hizmet!",
        "p!yardım 🔥 + p!davet 🔥 + p!otorol",
        "'.'",

  ]

  client.user.setStatus('dnd')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}