module.exports = {
    name: 'removerole',
    description: "this command will remove role of the user",
    commands: ['removerole', 'delrole'],
    minArgs: 2,
    exepectedArgs: "<Target user's @> <The role name>" ,
    permissions: "MANAGE_ROLES",
    execute(message, args) {
        const targetUser = message.mentions.user.first()
        if (!targetUser) {
            message.reply('Please specify a role to remove.')
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
       
       if (!member.role.cache.get(role.id)) {
           member.roles.remove(role)
           message.reply(`That user no longer has the ${roleName} role`)
       } else {
           message.reply(`That user does not have the ${roleName} role`)
       }
    },
}