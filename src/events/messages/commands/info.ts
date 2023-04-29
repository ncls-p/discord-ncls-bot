import { EmbedBuilder, Message } from "discord.js";

import { client } from "../../..";
import { config } from "../../../config";

export const info = async (message: Message) => {
  if (message.author.bot || !message.guild) return;

  if (!message.content.startsWith(config.prefix)) return;

  const content = message.content.toLowerCase();

  if (content.startsWith(`${config.prefix}info`)) {
    const embed = new EmbedBuilder();
    embed.setTitle("Info about the bot");
    embed.setDescription(
      `This bot is made by ${config.creator} with 🎧. \
            It is a bot that is made to help you with your daily tasks. \
            It uses the GPT-3 model to help you with your problems. \
            This bot is open source, you can find the code here : https://github.com/ncls-p/discord-ncls-bot`
    );
    if (client.uptime == null) return;
    embed.setFields([
      {
        name: "Prefix",
        value: config.prefix,
        inline: true,
      },
      {
        name: "Creator",
        value: config.creator,
        inline: true,
      },
      {
        name: "Version",
        value: config.version,
        inline: true,
      },
      {
        name: "Ping",
        value: `${client.ws.ping}ms`,
        inline: true,
      },
      {
        name: "uptime",
        value: `${Math.floor(client.uptime / 1000 / 60 / 60)}h ${Math.floor(
          client.uptime / 1000 / 60
        )}m ${Math.floor(client.uptime / 1000)}s`,
        inline: true,
      },
    ]);
    embed.setAuthor({
      name: client.user?.username || "Unknown",
      iconURL: client.user?.avatarURL() || "",
    });
    embed.setFooter({
      text: `Made by ${config.creator} with 🎧`,
      iconURL: client.user?.avatarURL() || "",
    });
    embed.setTimestamp(new Date());
    embed.setImage(
      "https://cdn.discordapp.com/attachments/1085561432986374286/1085598322380771339/ncls-bot-logo.png"
    );
    message.reply({ embeds: [embed] });
  }
};

export default info;
