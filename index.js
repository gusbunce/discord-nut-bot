var Discord = require('discord.js');
var bot = new Discord.Client();

bot.login('Nzk2MzUxNDYzNTc5NzEzNTU2.X_WqGA.GzQ4GEjYgA9lxVzwQS-z7MqCkgA');

bot.on('message', async message => {
    if (!message.guild) return;

    if (message.content === '/nut') {
        if (message.member.voice.channel) {
            var connection = await message.member.voice.channel.join();
            connection.play('./sounds/nut.mp3')
        } else {
            message.reply('You nedd to be in a Voice Channel to nut!')
        }
    }
});