import { EmbedBuilder, Message } from "discord.js";
import { client } from "../../..";

import { config } from "../../../config";

export const createChannel = async (message: Message) => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith(config.prefix)) return;

    const content = message.content.toLowerCase();

    if (content.startsWith(`${config.prefix}createchannel`)) {
        const args = content.split(" ");

        if (args.length === 1) {
            const embed = new EmbedBuilder()
                .setTitle("Error")
                .setDescription(
                    "Please provide a channel name to create a channel."
                )
                .setColor("Red");

            message.channel.send({ embeds: [embed] });
        } else {
            const channelName = args.slice(1).join(" ");
            let channel = await message.guild.channels.create({
                name: channelName,
            });

            const embed = new EmbedBuilder()
                .setTitle("Channel Created")
                .setDescription(
                    `Successfully created channel: ${channel.toString()}`
                )
                .setColor("Green");

            message.reply({ embeds: [embed] });

            await channel.setPosition(channel.guild.channels.cache.size - 1);
            // only allow the user and the bot to see the channel
            await channel.permissionOverwrites.edit(message.author.id, {
                ViewChannel: true,
                SendMessages: true,
            });
            await channel.permissionOverwrites.edit(client.user?.id || "", {
                ViewChannel: true,
                SendMessages: true,
            });

            const embed2 = new EmbedBuilder()
                .setTitle("Channel Created")
                .setDescription(
                    `This channel was created for ${message.author.toString()} and the bot.`
                )
                .setColor("Green");

            channel.send({ embeds: [embed2] });
            setTimeout(async () => {
                await channel.delete();
            }, 1000 * 60 * 60 * 24);
        }
    }
};

export default createChannel;
