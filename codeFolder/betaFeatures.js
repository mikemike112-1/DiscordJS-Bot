
//******fix the bug that will crash the bot if it tries orders or commands w/o a database available yet!!!!!!!

const Discord = require('discord.js');
const sqlite3 = require('sqlite3').verbose();

//create a new Discord client
const client = new Discord.Client();

//command handler
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

//variable listed here
var fileLocation = './commands/data/dataone.db';
var createTableTrades = "CREATE TABLE IF NOT EXISTS trades7(id TEXT NOT NULL, boughtsold TEXT NOT NULL, symbol TEXT NOT NULL, contract TEXT NOT NULL, expiration TEXT NOT NULL, character TEXT NOT NULL, number TEXT NOT NULL)";
//var insert4 = 'INSERT INTO trades(id, boughtsold, symbol, contract, expiration) VALUES (?, ?,?,?,?)';
var insert4 = 'INSERT INTO trades7 VALUES(?,?,?,?,?)';
var insert5 = 'INSERT INTO trades7 VALUES(?,?,?,?,?,?)';
var insert6 = 'INSERT INTO trades7 VALUES(?,?,?,?,?,?,?)';

/*
var lab1 = '822341306272972830';
var lab2 = '822341306272972830';
var errorMessages = '821995853400768552';
var internLounge = '824164085456306186';
var reaperChat = '768848147676921887';
var reaperCallOuts = '768847531223285790';
var executiveErrors = '824167501326974986';
*/
var lab1 = '821995664723804171';
var lab2 = '821995664723804171';
var errorMessages = '821995664723804171';
var internLounge = '821995664723804171';
var reaperChat = '821995664723804171';
var reaperCallOuts = '821995664723804171';
var executiveErrors = '821995664723804171';

client.on('message', message => {

  if (message.author.bot) return;
  let args = message.content.slice(0).trim().toLowerCase().split(" ");
  let command = args[0];

  try {
    client.commands.get(command).execute(client, sqlite3, message, args, fileLocation, createTableTrades, insert4, insert5, insert6, lab1, lab2, errorMessages, internLounge, reaperChat, reaperCallOuts, executiveErrors);
  } catch (error) { //if there is an error executing that command
    console.error(error);
    client.channels.cache.get(errorMessages).send('There was an error trying to execute that command!');
  }
  if (message.channel.name == "reaper-call-outs") {
    if ((message.author.toString() == '<@666088354147729420>' || message.author.toString() == '<@427616391206666252>') && message.toString().toLowerCase().includes('%')) {
      client.channels.cache.get(reaperChat).send('Manage positions! #reaper-call-outs');
    }
  }
});

//sql stuff down here
client.on('ready', () => {
  console.log('ready');
  let database = new sqlite3.Database(fileLocation, sqlite3.OPEN_READWRITE);

  database.run(createTableTrades, function (err, result) {

    if (err) {
      console.log("error: database not created");
      throw err;
    }
    console.log("Database created");
  });

  database.close();

});
client.login('TOKEN');

