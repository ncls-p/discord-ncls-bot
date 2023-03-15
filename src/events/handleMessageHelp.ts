import { EmbedBuilder, Message } from "discord.js";

import { config } from "../config";
import { client } from "../index";

export const handleMessageHelp = async (message: Message) => {
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
                name: "help",
                value: "This command",
            },
            {
                name: "gptphelp",
                value: "Get help from the GPT-3 model",
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

        embed.setColor("Purple");
        // Send the embed
        await message.reply({ embeds: [embed] });
    }
};
