const Math = require('mathjs');

module.exports = {
    name: 'hug',
    description: "Hug your friend",
    async execute(message, args, Discord){
        images = [
            "https://cdn.nekos.life/hug/hug_081.gif",
            "https://cdn.nekos.life/hug/hug_057.gif",
            "https://cdn.nekos.life/hug/hug_018.gif",
            "https://cdn.nekos.life/hug/hug_074.gif",
        ]

        personHuged = message.mentions.users.first()
        if (personHuged){
        let hugembed = new Discord.MessageEmbed()
            .setColor('#F20D0D')
            .setTitle(`You Huged ${personHuged.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        message.channel.send(hugembed)
    }
    else{
        message.channel.send('**Please Mention a User**')
    }
    }
}
