import { Message } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

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

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `You are writing into a discord chat, you will have to use the discord markdown. 
                If you write code, you need to use the code block markdown and the language you are using.
                You can use discord emojis, you can use bold, italic, underline, strikethrough, code, spoiler,
                quote, blockquote, link, image, mention, channel, role.
                Here is my text, you need to answer in the same language as the following text : ${textToSend}`,
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
