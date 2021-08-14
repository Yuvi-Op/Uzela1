const Math = require('mathjs');

module.exports = {
    name: 'slap',
    description: "Slap your friend",
    async execute(message, args, Discord){
        images = [  
            "https://media.discordapp.net/attachments/823449475250913281/872394572519583744/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872394817206886420/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872394898924531732/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872394977152475136/sample.gif",
            "https://media.discordapp.net/attachments/823449475250913281/872395070899376168/sample.gif?width=400&height=225",
            "https://media.discordapp.net/attachments/823449475250913281/872395468397756456/sample.gif",
         ]

        personslapped = message.mentions.users.first()
        if (personSlapped){
        let slapembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`You Slap ${personSlapped.username}`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        message.channel.send(slapembed)
    }
    else{
        message.channel.send('**Please Mention a User**')
    }
    }
}
