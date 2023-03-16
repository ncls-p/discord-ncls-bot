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
    console.log(`Client ID: ${client.user?.id}`);
    console.log(`Client Username: ${client.user?.username}`);
    console.log(`Client Discriminator: ${client.user?.discriminator}`);
    console.log(`Creator: ${config.creator}`);
    console.log(`Prefix: ${config.prefix}`);
    console.log(
        `Token: ${config.token.slice(0, 5)}...${config.token.slice(-5)}`
    );
    console.log(
        `OPENAI API Key: ${config.openai_api_key.slice(
            0,
            5
        )}...${config.openai_api_key.slice(-5)}`
    );
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
