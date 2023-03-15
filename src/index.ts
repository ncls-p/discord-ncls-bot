import { Client } from "discord.js";

import { config } from "./config";
import { handleMessageCommands as handleMessageCommandsOpenAI } from "./events/handleMessageCommandsOpenAI";
import { handleMessageHelp } from "./events/handleMessageHelp";
import { handleMessageToResponds } from "./events/messageToResponds";

export const client = new Client({
    intents: config.intents,
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", handleMessageToResponds);
client.on("messageCreate", handleMessageCommandsOpenAI);
client.on("messageCreate", handleMessageHelp);

client.login(config.token);
