const Discord = require("discord.js");
const ayarlar = require ("./ayarlar.json")
const client = new Discord.Client();

var prefix = ayarlar.prefix;

client.on ('ready', () => {
    console.log("Botumuz az önce giris yapti !")
});


client.on ('message', message => {
    if(message.content.toLowerCase() == 'sa')
    message.reply("Alekümselam knk hosgeldin!")
});

client.on('message', message => {
    if(message.content.toLowerCase() == 'prefix')
    message.reply('tmc!')
});

client.on ('message', message => {
    if(message.content.toLowerCase() == 'merhaba')
    message.reply('Merhaba kanka nasılsın ?')
});

client.on('message', message => {
    if(message.content.toLowerCase() == 'selam') {
    message.reply('Selam knk')
    }
    if(message.content === prefix + 'yardim') {
message.reply("pubgkasa,avla,avatar,profil,at,sil,dayıyasor")        
    }



});






client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(prefix + "kick")) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick('Yetkilinin isteği üzerine.')
                    .then(() => {
                        message.reply(` ${user.tag} adlı üye başarıyla sunucudan atıldı.`);
                    })
                    .catch(err => {
                        message.reply('Bu kullanıcıyı sunucudan atamıyorum.');
                        console.error(err);
                    });
                } else {
                    message.reply("Bu kullanıcı bu sunucudan değil.");
                }

              } else {
                message.reply("Birini atmak için o kişiyi etiketlemelisin.");
            }
    }
});


client.login(ayarlar.token)
