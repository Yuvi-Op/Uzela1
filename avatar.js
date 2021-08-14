const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'a',
    description: "Avatar!",
    execute(message, args) {
        const member = message.mentions.members.first() || message.member;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`${message.author.username}'s avatar`)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 712 }))
            .setColor("RANDOM")
        );
    },
};