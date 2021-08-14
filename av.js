const { MessageEmbed} = require("discord.js");

module.exports = {
    name: "av",
    description: 'This command will show avatar of the user',
    execute(message, args) {
        const member = message.mentions.members.first() || message.member;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`${message.author.username}'s avatar`)
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor("RANDOM")
        );
    },
};