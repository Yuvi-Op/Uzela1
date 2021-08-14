module.exports = {
name: 'pokemon',
aliases: ['pokemon'],
description: "This Command will show All About Pokemon!",
execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail('')
    .setTitle('**Pokemon**')
    .setDescription('**Pokemon is a Tv anime**')
    .addFields(
        {name: 'Pokemon', value: ''}
    )
    .addFields(
        {name: '', value: ''}
    )
    .setImage('')
    .setFooter(`Request by: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setTimestamp()
    message.channel.send(newEmbed);
}
}