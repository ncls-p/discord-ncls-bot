# NCLS Bot
NCLS Bot is an open source Discord bot created to assist you in your daily tasks using the OpenAI GPT-3 model.

## Features
Current features of NCLS Bot include:

### Commands
- `help`: Displays the list of available commands
- `gpthelp`: Provides help from the OpenAI GPT-3 model
- `ping`: Displays the bot's latency
- `info`: Displays information about the bot
- `createchannel`: Creates a private channel for the user and the bot

### Using the ToRespond Feature
The bot also has an automated response module that sends a predefined response when a specific keyword is used in the chat room. To use this feature, you can modify the `config.ts` file and add entries to the messagesInResponse array, following the format of the existing entries. The bot will then automatically respond with the message in key-word to the messages in the array as values.


## Installation
Clone the repository: git clone https://github.com/ncls-p/discord-ncls-bot
go to the project directory: `cd discord-ncls-bot`
Install dependencies: `yarn`
Copy the .env.example file to .env: `cp .env.example .env`
Set up environment variables in the `.env` file at the root of the project
Start the bot: `yarn start`

## Configuration
NCLS Bot uses a configuration stored in a .env file at the root of the project. Here are the required environment variables to make the bot work:

- `TOKEN`: Your Discord bot token
- `PREFIX`: The prefix used for all bot commands
- `CREATOR`: Your username
- `VERSION`: The current version of the bot
- `OPENAI_API_KEY`: Your OpenAI API key

## Contribution
Contributions are welcome! Feel free to create an issue or a pull request if you have any suggestions for improvement or new features to add.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
