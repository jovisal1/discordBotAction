const core = require("@actions/core");
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const discord_token = core.getInput("discord_token");
const id_channel = core.getInput("id_channel");

client.on("ready", () => {
  console.log(`Logged in as ${client.user}!`);
  client.channels
    .fetch(id_channel)
    .then((channel) => {
      channel.send(`Vamos que nos vamos desde nodeaaaa`);
    })
    .catch((err) => console.log("Could not find the channel."));
});

client.login(discord_token);
setTimeout(process.exit(0), 5000);
