module.exports = {
    name: 'say',
    description: "Say a message of user!",
    execute(message, args) {
        const sayMessage = args.join("");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}