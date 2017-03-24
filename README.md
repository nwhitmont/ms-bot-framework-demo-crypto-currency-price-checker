# ms-bot-framework-demo-crypto-currency-price-checker

A crypto currency price checker bot for Microsoft Bot Framework

### System Requirements
- [NodeJS >= 7.7.x](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/en/)
- [Bot Framework Emulator](https://docs.botframework.com/en-us/tools/bot-framework-emulator/)
- [Visual Studio Code IDE](https://code.visualstudio.com/)
- [Git >= 2.12.x](https://git-scm.com/)


### Developer Setup Guide
#### Step 0: Download project files
1. Open your terminal of choice. Visual Studio Code has a built-in terminal that works great.
2. Navigate to your project workspace
```
$ cd ~/<path_to_your_workspace>/
```
3. Clone this repo via Git command-line
```
$ git clone https://github.com/nwhitmont/ms-bot-framework-demo-crypto-currency-price-checker.git
```
4. Navigate to the bot project directory
```
$ cd ms-bot-framework-demo-crypto-currency-price-checker/
```

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
- [Learn by Example with these code samples](https://docs.botframework.com/en-us/node/builder/guides/examples)
- [Check out the Bot Directory for more examples & ideas](https://bots.botframework.com/)
- [Read the Bot Framework SDK for NodeJS docs](https://docs.botframework.com/en-us/node/builder/overview)
- [View the Bot Framework SDK for NodeJS on GitHub](https://github.com/Microsoft/BotBuilder)
- [Ask or answer questions on StackOverflow](https://stackoverflow.com/questions/tagged/botframework)
