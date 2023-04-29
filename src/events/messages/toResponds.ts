import { Message } from "discord.js";
import { config, MessagesInResponse } from "../../config";

export const toResponds = (message: Message) => {
  if (message.author.bot || !message.guild) return;

  const content = message.content.toLowerCase();
  const messagesInResponse = config.messagesInResponse as MessagesInResponse;
  for (const response in messagesInResponse) {
    const triggerWords = messagesInResponse[response];

    for (const word of triggerWords) {
      if (content.includes(word.toLowerCase())) {
        message.channel.send(response);
        return;
      }
    }
  }
};
