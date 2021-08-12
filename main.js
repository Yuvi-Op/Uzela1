const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log('Bot is online!')
    // Set the client user's activity
client.user.setActivity('discord.js', { type: 'Playing' })
.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
.catch(console.error);
// Set the client user's presence
client.user.setPresence({ activity: { name: '-help' }, status: 'Online' })
  .then(console.log)
  .catch(console.error);

});

const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === ''){
        client.commands.get('').execute(message, args, Discord);
    }else if(command === ''){
        
        client.commands.get('').execute(message, args, Discord);
    }else if(command === 'tictactoe'){
        
        client.commands.get('tictactoe').execute(message, args, Discord);
    }else if(command ==='coinflip'){
        
        client.commands.get('coinflip').execute(message, args, Discord);
    }else if(command ==='say'){
        
        client.commands.get('say').execute(message, args, Discord);
    }else if(command ===''){
        
        client.commands.get('').execute(message, args, Discord); 
    }else if(command ===''){
        
        client.commands.get('').execute(message, args, Discord);
    }else if(command ==='playstore'){
        
        client.commands.get('playstore').execute(message, args, Discord);
    }else if(command ==='anime'){
        
        client.commands.get('anime').execute(message, args, Discord);
    }
});
client.login('')
