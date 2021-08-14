const { discord } = require('discord.js'); 
const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'url',
    description: "This command will make url button",
    execute(client, message, args) {

        const embed = new discord.MessageEmbed()
        .setTitle("Click this!")
        .setColor("BLUE")

let button = new MessageButton()
  .setStyle('url')
  .setURL('https://npmjs.com/discord-buttons') 
  .setLabel('My First URL Button!'); 

message.channel.send('Hey', button);
}
}