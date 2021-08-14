const Math = require('mathjs');

module.exports = {
    name: 'poke',
    description: "Poke your friend",
    async execute(message, args, Discord){
        images = [
            "https://media.discordapp.net/attachments/823449475250913281/872392836643962890/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872393367269572628/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872393754827427870/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872393849396412467/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872394009610432552/sample.gif"
        ]

        personPoked = message.mentions.users.first()
        if (personPoked){
        let pokeembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`You have Poked ${personPoked.username}`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        message.channel.send(pokeembed)
    }
    else{
        message.channel.send('**Please Mention a User**')
    }
    }
}
