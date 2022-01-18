const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});

require("./handlers/mongo");

const synchronizeSlashCommands = require('discord-sync-commands');

client.commands = new Discord.Collection();
fs.readdir("./komutlar/", (_err, files) => {files.forEach((file) => {if (!file.endsWith(".js")) return;
let props = require(`./komutlar/${file}`);
let commandName = file.split(".")[0];
        client.commands.set(commandName, { name: commandName, ...props });
        console.log(`Yüklenen Komut: ${commandName}`)});
                                            
synchronizeSlashCommands(client, client.commands.map((c) => ({name: c.name,description: c.description,options: c.options,type: 'CHAT_INPUT'})), {debug: true})});

fs.readdir("./events/", (_err, files) => {files.forEach((file) => {if (!file.endsWith(".js")) return;
const event = require(`./events/${file}`);
let eventName = file.split(".")[0];
        console.log(`Yüklenen Event: ${eventName}`);
        client.on(eventName, event.bind(null, client));
delete require.cache[require.resolve(`./events/${file}`)]})})


client.on("ready", async(client) => {
client.user.setActivity("ewing.ga", { type: "PLAYING" })
})

client.login(process.env.token);