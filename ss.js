const Discord = require('discord.js'); 

module.exports = {
    name: "ss",
    description: "Search Music",

    async execute(client, message, args){
        let messagelink = args.join('%20') 

if(!args[0]) return message.channel.send('Please give me a song name to search') 

        let embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`[${message}](https://open.spotify.com/search/${messagelink})`) 

        message.channel.send(embed)
    }
}