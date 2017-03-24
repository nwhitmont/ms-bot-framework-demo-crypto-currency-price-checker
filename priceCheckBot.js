/*
    @name bot.js
    @sumary Demo NodeJS bot using MS Bot Framework

    @author Nils Whitmont <nils.whitmont@gmail.com>
*/

// NODE MODULES
var restify = require('restify'); // REST client module
var builder = require('botbuilder'); // MS Bot Framework for NodeJS
var moment = require('moment'); //friendly date/time formatter

// LOCAL VARS
var PORT_NUMBER = 3377; // Set the bot port here
var COINBASE_API_ERROR_MESSAGE = 'Error contacting Coinbase API. We\'re sending a bot to fix it...';


/*
    1. INITIALIZE COINBASE API CLIENT
*/
var Client = require('coinbase').Client;
// note: API key not required for price checks
// fill in this section if you want to buy/sell with your own account
var client = new Client({
    'apiKey': 'API KEY',
    'apiSecret': 'API SECRET'
});


/*
    2. INITIALIZE BOT SERVER CONFIGURATION
*/

// initialize the restify server
var server = restify.createServer();

// set server port and log server url
server.listen(process.env.port || process.env.PORT || PORT_NUMBER, function() {
    console.log(server.name + ' listening at ' + server.url);
});

// initialize the Chat Connector with bot credentials
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// initialize the bot using the botbuilder module
var bot = new builder.UniversalBot(connector);

// configure the connector to listen on the /api/messages route
server.post('/api/messages', connector.listen());


/*
    3. CONFIGURE DIALOG HANDLERS
*/

// handle generic input, hello, etc.
bot.dialog('/', [
    function(session) {
        // what type of currency to we want the bot to price check?
        builder.Prompts.text(session, 'What currency would you like to price check? Currently supported: Bitcoin, Ethereum')
    },
    function(session, input) {
        var currencySymbol = input.response;
        if(currencySymbol == 'BTC' || currencySymbol == 'btc' || currencySymbol == 'bitcoin') {
            // redirect user to the /bitcoin dialog handler
            session.beginDialog('/bitcoin');
        } 
        else if(currencySymbol == 'ETH' || currencySymbol == 'eth' || currencySymbol == 'ethereum') {
            // redirect user to the /ethereum dialog handler
            session.beginDialog('/ethereum');
        }
        else {
            // handle random/unsupported currency input
            session.send('You entered an unsupported currency. \nAvailable options: BTC, bitcoin, btc, ETH, eth, ethereum')
            session.beginDialog('/');
        }
    }
]);

/*
    Example 1: Basic Dialog Handler (no user input)
*/
bot.dialog('/ethereum', function(session) {
    client.getBuyPrice({'currencyPair': 'ETH-USD'}, function(err, price) {
        var currentDateTime = moment().format('MMM Do YYYY, h:mm:ss a');
        session.send('Current ETH buy price: $' + price.data.amount + ' ' + price.data.currency + ' at ' + currentDateTime);
        session.endDialog();
    });
});

/*
    Example 2: Dialog with user prompts and user input variable usage
*/
bot.dialog('/bitcoin', [
    function(session) {
        builder.Prompts.text(session, 'Select price type --> Buy or Sell?')
    },
    function(session, input) {
        var priceType = input.response;
        var currentDateTime = moment().format('MMM Do YYYY, h:mm:ss a');

        if(priceType == 'buy' || priceType == 'Buy') {
            client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, price) {
                if(!err) {
                    session.send(`Current BTC Buy Price: $${price.data.amount} ${price.data.currency} at ${currentDateTime}`);
                    session.beginDialog('/');
                } else {
                    session.send(COINBASE_API_ERROR_MESSAGE);
                }
            });
        } else if(priceType == 'sell' || priceType == 'Sell') {
            client.getSellPrice({'currencyPair': 'BTC-USD'}, function(err, price) {
                if(!err) {
                    session.send(`Current BTC Buy Price: $${price.data.amount} ${price.data.currency} at ${currentDateTime}`);
                    session.beginDialog('/')
                } else {
                    session.send(COINBASE_API_ERROR_MESSAGE);
                } 
            });
        }
    }
]);

// END OF LINE
