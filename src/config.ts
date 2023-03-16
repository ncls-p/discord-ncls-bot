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
        "https://img.search.brave.com/butA4g2FCfANcWU9_U6HxxL22VpI005DYhAtiVGW5WQ/rs:fit:505:470:1/g:ce/aHR0cHM6Ly9jZG41/LmNvbG9yaXRvdS5j/b20vZGVzc2lucy9w/ZWluZHJlLzIwMTEx/My9kY2FiZGJlZDQ0/NmIyMjJhYzBhMDk4/MTc5ZTU5ZDUzYy5w/bmc":
            ["arabe"],
        "https://cdn.discordapp.com/attachments/600789311348015108/993147054429843507/IMG_1466-removebg-preview.png":
            ["blanc"],
        "https://img.search.brave.com/-4gxkHxLoUbRJ7fJdWVbdr0HJAeIvgtdGedIWa0Gh0o/rs:fit:480:360:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9D/MkZmWlkwT2RXdy9o/cWRlZmF1bHQuanBn":
            ["noir"],
        "https://img.search.brave.com/AoM3hEg562ReUfY_r4EJEAiilADcvUfn8AoEgxa011c/rs:fit:220:187:1/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/aW1hZ2VzLzcxZDVm/YThlOWRlYmQyYmE2/NWNjODFiOGU4YmM1/MDBkL3Rlbm9yLmdp/Zg.gif":
            ["nwar"],
        "https://img.search.brave.com/S_nRAPG_GcwBi-R-71idvBjHHnYfWckVfTA43KBinKI/rs:fit:500:500:1/g:ce/aHR0cHM6Ly93d3cu/bGUtY2hhcGVsaWVy/LXJvZGV6LmNvbS9p/bWFnZXMvY2hhcGVh/dS1jaGlub2lzXzIu/anBn":
            ["chinois", "jaune", "noiche"],
        "https://img.search.brave.com/42GkIX5DvSuE3chjE4QvqPd-YO9FDQxoMzH90Qi_BqU/rs:fit:885:500:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGluZGVwZW5k/YW50LmZyL2FwaS92/MS9pbWFnZXMvdmll/dy82MDJlNjZhMThm/ZTU2ZjdiMTAzZGNm/NjIvbGFyZ2UvaW1h/Z2UuanBnP3Y9MQ":
            ["migrant", "migré"],
    },
};
