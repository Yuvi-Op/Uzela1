const Math = require('mathjs');

module.exports = {
    name: 'kiss',
    description: "Kiss your friend",
    async execute(message, args, Discord){
        images = [
            "https://discord.com/channels/860434757928878080/860783493070848000/866888827837349889",
            "https://discord.com/channels/860434757928878080/860783493070848000/866891215693414430",
            "https://discord.com/channels/860434757928878080/860783493070848000/866891809577893918",
            "https://discord.com/channels/860434757928878080/860783493070848000/866892418565668874",
            "https://discord.com/channels/860434757928878080/860783493070848000/866892981301674025"
        ]

        personKissed = message.mentions.users.first()
        if (personKissed){
        let kissembed = new Discord.MessageEmbed()
            .setColor('#F20D0D')
            .setTitle(`You have Kissed ${personKissed.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        message.channel.send(kissembed)
    }
    else{
        message.channel.send('**Please Mention a User**')
    }
    }
}
