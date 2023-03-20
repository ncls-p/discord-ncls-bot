import { ActivityType, Client } from "discord.js";

import { config } from "./config";
import {
    clear,
    help,
    info,
    helpGpt,
    ping,
    toResponds,
} from "./events/messages";

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

client.on("messageCreate", toResponds);

client.on("messageCreate", help);
client.on("messageCreate", info);
client.on("messageCreate", helpGpt);
client.on("messageCreate", ping);
client.on("messageCreate", clear);

client.login(config.token);
