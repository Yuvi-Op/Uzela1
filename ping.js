const discord = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns the of bot's ping!",
    async execute(client, message) {
        const embed = new discord.MessageEmbed()
        .setTitle("Bot's ping")
        .setDescription(`Ping - ${client.ws.ping}`)
        message.channel.send(embed)
    }
}