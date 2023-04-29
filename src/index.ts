import { ActivityType, Client } from "discord.js";

import { logLoginLogs } from "./utils/logLoginLogs";
import { config } from "./config";
import { getEventsCommands } from "./utils/getEventsCommands";

export const client = new Client({
  intents: config.intents,
});

client.on("ready", () => {
  logLoginLogs();

  client.user?.setActivity("Development", {
    type: ActivityType.Competing,
  });
});

getEventsCommands();

client.login(config.token);
