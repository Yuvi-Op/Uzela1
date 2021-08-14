module.exports = {
name: 'free-fire',
aliases: ['free fire', 'ff'],
description: "This Command will show All About Free Fire!",
execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail('https://images-ext-1.discordapp.net/external/aJy21gfzHrbytC1LAT3uqFuCIcZ8TczyZteNKfhxRDE/https/play-lh.googleusercontent.com/Knw_hAyujH2PKqKtOEM5r8oJ_U-enugflHPpAMUr2T1R6Fp3AUPMYlLKm476BYwNt3Wl?width=400&height=115')
    .setTitle('**Free Fire**')
    .setDescription('**Free fire is a battle ground game available on Mobile and pc both**')
    .addFields(
        {name: 'Free Fire', value: 'Free Fire was Published by Garena on 30 September 2017. Garena Free Fire is an online-only action-adventure battle royale game played in a third person perspective. The game consists of up to 50 players falling from a parachute on an island in search of weapons and equipment to kill the other players. The last player or team standing wins the round and get Booyah.'}
    )
    .setImage('https://images-ext-1.discordapp.net/external/aJy21gfzHrbytC1LAT3uqFuCIcZ8TczyZteNKfhxRDE/https/play-lh.googleusercontent.com/Knw_hAyujH2PKqKtOEM5r8oJ_U-enugflHPpAMUr2T1R6Fp3AUPMYlLKm476BYwNt3Wl?width=400&height=195')
    .setFooter(`Request by: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png", dynamic: true }))
    .setTimestamp()
    message.channel.send(newEmbed);
}
}