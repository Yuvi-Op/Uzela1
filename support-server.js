module.exports = {
    name: 'support-server',
    description: "This will give link of Support Server!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('**Support Server**')
        .addFields(
            {name: 'Support Server', value: 'https://discord.gg/jex8HuRKBv'}
        )
        }
    }




