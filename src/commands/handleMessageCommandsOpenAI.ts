import { Message } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

import { client } from "..";
import { config } from "../config";

export const handleMessageCommands = async (message: Message) => {
    if (message.author.bot || !message.guild) return;

    if (!message.content.startsWith(config.prefix)) return;

    const content = message.content.toLowerCase();

    if (content.startsWith(`${config.prefix}gpthelp`)) {
        const textToSend = content.replace(`${config.prefix}gpthelp`, "");
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        message.channel.sendTyping();

        const messages = await message.channel.messages.fetch({
            limit: 50,
        });
        messages.sort((a, b) => {
            return a.createdTimestamp - b.createdTimestamp;
        });

        let discussion = "";
        messages.forEach((message) => {
            discussion += `author: ${message.author.username} message: ${message.content} \n`;
        });
        const botName = client.user?.username;

        console.log(discussion);

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `You are writing into a discord chat, you will have to use the discord markdown. 
                If you write code, you need to use the code block markdown and the language you are using.
                You can use discord emojis, you can use bold, italic, underline, strikethrough, code, spoiler,
                quote, blockquote, link, image, mention, channel, role.
                In the following text your name is ${botName} and you are in the following discussion : \n ${discussion}
                You should only write the text you want to send to the discussion and not the author name or other things.
                In this discussion you need to answer to the following question in the language : ${textToSend}`,
                max_tokens: 300,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                stop: ["input:"],
            });
            if (completion.data.choices[0].text) {
                message.reply(completion.data.choices[0].text);
            }
        } catch (error) {
            console.log(error);
            message.reply("Something went wrong");
        }
    }
};
