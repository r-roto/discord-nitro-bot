const Discord = require('discord.js');
const nitro = require('discordnitro')
const client = new Discord.Client();

var code = nitro(3)

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '.gencode') {
		message.channel.send(nitro(3));
	}
});

client.login('your-token-here');
