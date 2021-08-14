const discord = require('discord.js'); 
const { MessageButton } = require("discord-buttons");

module.exports = {
    name: 'button',
    description: "This command will make button",
    execute(client, message, args) {

        let embed = new discord.MessageEmbed()
        .setTitle("Are you Smart?")
        .setColor("BLUE")

        let yes = new MessageButton()
        .setLabel("Yes")
        .setID('Smart')
        .setStyle("green");

        let no = new MessageButton()
        .setLabel("No")
        .setID('Dumbass')
        .setStyle("red");

    message.channel.send("Hlo!",{
        buttons: [yes, no],
        embed: embed
    })
}
}