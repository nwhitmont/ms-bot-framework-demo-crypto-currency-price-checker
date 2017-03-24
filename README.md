# ms-bot-framework-demo-crypto-currency-price-checker

A crypto currency price checker bot for Microsoft Bot Framework

### System Requirements
- [NodeJS >= 7.7.x](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/en/)
- [Bot Framework Emulator](https://docs.botframework.com/en-us/tools/bot-framework-emulator/)
- [Visual Studio Code IDE](https://code.visualstudio.com/)


### Developer Setup Guide
#### Step 1: Install dependencies and run the bot.
1. Install Node modules via Yarn 
```
$ yarn install
```
2. Start the bot 
```
$ yarn start
```

#### Step 2: Run the Bot Framework Emulator and interact with the bot.
1. Open the Bot Framework Emulator app
2. In the Bot Framework Emulator, set the target URL to: 
```
http://localhost:3377/api/messages
```
3. Click "Connect" - Emulator will connect to the running Bot
4. Chat with the bot via the Emulator chat interface
5. Click a message in the chat window to see detailed JSON data for the selected request/response
6. After development changes, restart the bot and reset the connection in the Emulator to test the new code

### Where to go from here?
- [Read the Bot Framework SDK for NodeJS docs](https://docs.botframework.com/en-us/node/builder/overview)
- [View the Bot Framework SDK for NodeJS on GitHub](https://github.com/Microsoft/BotBuilder)
- [Ask or answer questions on StackOverflow](https://stackoverflow.com/questions/tagged/botframework)
- [Check out the Bot Directory for more examples & ideas](https://bots.botframework.com/)