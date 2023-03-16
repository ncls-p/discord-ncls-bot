import { EmbedBuilder, Message } from "discord.js";

import { config } from "../config";
import { client } from "../index";

export const handleMessageCommandPing = async (message: Message) => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith(config.prefix)) return;

    const content = message.content.toLowerCase();

    if (content.startsWith(`${config.prefix}ping`)) {
        const embed = new EmbedBuilder();
        embed.setTitle("🏓Pong!");
        embed.setDescription(
            `Latency is ***${
                Date.now() - message.createdTimestamp
            }***ms. API Latency is ***${Math.round(client.ws.ping)}***ms`
        );
        embed.setAuthor({
            name: client.user?.username || "Unknown",
            iconURL: client.user?.avatarURL() || "",
        });
        embed.setFooter({
            text: `Made by ${config.creator} with 🎧`,
            iconURL: client.user?.avatarURL() || "",
        });
        embed.setTimestamp(new Date());
        message.reply({ embeds: [embed] });
    }
};
