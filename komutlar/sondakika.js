const Discord = require('discord.js');
exports.run = function(client, message, args) {
var request = require('request'); // ilk önce kullanacağımız modülü yani request'i belirtelim.
request('https://simsekapi.glitch.me/HgV6Aca9/sondakika', function (error, response, body) { // veri çekeceğimiz siteyi belirliyoruz.
    if (error) return message.channel.send('Hata:', error); // hata varsa kanala göndersin.
    else if (!error) { // hata yoksa;
        var veri = JSON.parse(body); // siteden ana veriyi çeksin.
        message.channel.send(veri.kaynak1); // çekilen değeri filtreleyerek kanala yollasın.
    } // eğer kodunu kapatalım.
}); // en s

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sondakika',
  description: '',
  usage: 'sondakika'
};
