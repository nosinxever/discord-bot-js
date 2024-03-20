const fs = require('node:fs');

// Require the necessary discord.js classes

const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
require("dotenv").config();

const AUTH_TOKEN = process.env.AUTH_TOKEN;


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    if (commandName === 'hello') {
        await interaction.reply('Hello world 2024');
    }
});

// Log in to Discord with your client's token
client.login(AUTH_TOKEN);





//https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration
//https://discord.com/developers/applications