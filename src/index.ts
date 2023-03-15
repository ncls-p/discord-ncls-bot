import { ActivityType, Client } from "discord.js";

import { config } from "./config";
import { handleMessageCommandPing } from "./commands/handleMessageCommandPing";
import { handleMessageCommands as handleMessageCommandsOpenAI } from "./commands/handleMessageCommandsOpenAI";
import { handleCommandMessageHelp } from "./commands/handleCommandMessageHelp";
import { handleMessageToResponds } from "./events/messageToResponds";
import { handleCommandMessageInfo } from "./commands/handleCommandMessageInfo";
import { handleMessageCommandClear } from "./commands/handleMessageCommandClear";

export const client = new Client({
    intents: config.intents,
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    client.user?.setActivity("Development", {
        type: ActivityType.Competing,
    });
});

client.on("messageCreate", handleMessageToResponds);

client.on("messageCreate", handleCommandMessageHelp);
client.on("messageCreate", handleCommandMessageInfo);
client.on("messageCreate", handleMessageCommandsOpenAI);
client.on("messageCreate", handleMessageCommandPing);
client.on("messageCreate", handleMessageCommandClear);

client.login(config.token);
