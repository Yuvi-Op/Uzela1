module.exports = {
    name: 'giverole',
    description: "this command will give role to the user",
    commands: 'giverole',
    minArgs: 2,
    exepectedArgs: "<Target user's @> <The role name>" ,
    permissions: "MANAGE_ROLES",
    execute(message, args) {
        const targetUser = message.mentions.user.first()
        if (!targetUser) {
            message.reply('Please specify a role to give.')
            return
        }

        arguments.shift()

        const roleName = arguments.join(' ')
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        if (!role) {
            message.reply(`There is no role with the name "${roleName}"`)
        }

       const member = guild.member.cache.get(targetUser.id)
       console.log(member)

       message.reply(`That user now have the "${roleName}" role`)
    },
}