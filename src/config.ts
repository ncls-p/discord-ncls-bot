import dotenv from "dotenv";
import { IntentsBitField } from "discord.js";

dotenv.config();

export type MessagesInResponse = {
  [key: string]: string[];
};

export const config = {
  token: process.env.DISCORD_BOT_TOKEN as string,
  prefix: process.env.DISCORD_BOT_PREFIX as string,
  creator: process.env.DISCORD_BOT_CREATOR as string,
  openai_api_key: process.env.OPENAI_API_KEY as string,
  version: "1.3.O",

  intents: [
    "AutoModerationConfiguration",
    "AutoModerationExecution",
    "DirectMessageReactions",
    "DirectMessageTyping",
    "DirectMessages",
    "GuildBans",
    "GuildEmojisAndStickers",
    "GuildIntegrations",
    "GuildInvites",
    "GuildMembers",
    "GuildMessageReactions",
    "GuildMessageTyping",
    "GuildMessages",
    "GuildModeration",
    "GuildPresences",
    "GuildScheduledEvents",
    "GuildVoiceStates",
    "GuildWebhooks",
    "Guilds",
    "MessageContent",
  ] as unknown as IntentsBitField[],

  messagesInResponse: {
    "FOU !!!": ["fou"],
    "https://c.tenor.com/zvg8w0FkecYAAAAC/feur-theobabac.gif": ["quoi ?"],
    "???": ["???"],
    ":antilope:": ["antilope"],
    "https://tenor.com/view/siuuu-gif-24393397": ["suu", "siu"],
    "https://tenor.com/fr/view/hippo-poop-take-a-dump-gif-9969384": [
      "caca",
      "hippo",
      "poop",
    ],
    "https://img.search.brave.com/AoM3hEg562ReUfY_r4EJEAiilADcvUfn8AoEgxa011c/rs:fit:220:187:1/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/aW1hZ2VzLzcxZDVm/YThlOWRlYmQyYmE2/NWNjODFiOGU4YmM1/MDBkL3Rlbm9yLmdp/Zg.gif":
      ["nwar"],
  },
};
