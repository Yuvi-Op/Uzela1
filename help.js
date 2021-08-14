module.exports = {
    name: 'help',
    description: "This is a help command!",
    async execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addFields(
            {name: '**My Prefix is `-`**', value: 'If u need any help then just type `-help`'}
        )
        .setTitle('My prefix is `-`')
        .setTitle('COMMANDS')
        .setDescription('**These are all Commands of the bot**')
        .addFields(
            {name: 'Fun', value: '`Hug | Kiss | Slap | Poke | Gtn`'},
        )
        .addFields(
            {name: 'Economy', value: '`Command Coming Soon!`'},
        )
        .addFields(
            {name: 'Misc', value: '`Coinflip | Playstore | Anime | Clear | Slowmode`'},
        )
        .addFields(
            {name: 'Moderation', value: '`Kick | Ban | Unban | Mute | Unmute`'}
        )
        .setImage('https://media.discordapp.net/attachments/860783493070848000/866662229817557012/kimetsu.jpeg')
        .setFooter(`Request by: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
        .setTimestamp()
        await message.react("✅")
        message.channel.send(newEmbed);
    }
}