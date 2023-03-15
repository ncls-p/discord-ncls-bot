import { EmbedBuilder, Message } from "discord.js";

import { config } from "../config";
import { client } from "../index";

export const handleCommandMessageHelp = async (message: Message) => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith(config.prefix)) return;

    const content = message.content.toLowerCase();

    if (content.startsWith(`${config.prefix}help`)) {
        const embed = new EmbedBuilder();
        embed.setTitle("Functionality of the bot");
        embed.setDescription(
            "Here is a list of all the functionality, you can use them by typing the prefix before the command"
        );
        embed.addFields([
            {
                name: "- Help",
                value: "This command",
            },
            {
                name: "- Gptphelp",
                value: "Get help from the GPT-3 model",
            },
            {
                name: "- Ping",
                value: "Get the latency of the bot",
            },
            {
                name: "- Info",
                value: "Get information about the bot",
            },
        ]);
        embed.setAuthor({
            name: client.user?.username || "Unknown",
            iconURL: client.user?.avatarURL() || "",
        });
        embed.setFooter({
            text: "Made by Nicolas#0719 with 🎧",
            iconURL: client.user?.avatarURL() || "",
        });
        embed.setTimestamp(new Date());
        embed.setImage(
            "https://cdn.discordapp.com/attachments/1085561432986374286/1085598322380771339/ncls-bot-logo.png"
        );

        embed.setColor("Purple");
        // Send the embed
        await message.reply({ embeds: [embed] });
    }
};
