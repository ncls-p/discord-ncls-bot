import { EmbedBuilder, Message, TextChannel } from "discord.js";

import { config } from "../config";

export const handleMessageCommandClear = async (message: Message) => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith(config.prefix)) return;

    const content = message.content.toLowerCase();

    if (content.startsWith(`${config.prefix}clear`)) {
        if (!message.member?.permissions.has("ManageMessages")) {
            message.reply("You don't have permission to use this command.");
            return;
        }
        const args = content.split(" ");
        const amount = parseInt(args[1]);

        if (isNaN(amount)) {
            message.reply("That doesn't seem to be a valid number.");
            return;
        } else if (amount < 2 || amount > 100) {
            message.reply("You need to input a number between 2 and 100.");
            return;
        }

        try {
            if (message.channel instanceof TextChannel) {
                await message.channel.bulkDelete(amount + 1, true);
                const embed = new EmbedBuilder()
                    .setColor("Purple")
                    .setDescription(`Successfully cleared ${amount} messages.`);

                const sentMessage = await message.channel.send({
                    embeds: [embed],
                });
                setTimeout(() => sentMessage.delete(), 5000);
            }
        } catch (error) {
            console.error(error);
            message.reply(
                "There was an error trying to clear messages in this channel!"
            );
        }
    }
};
