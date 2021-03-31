// A reference to the Discord.js module
const Discord = require('discord.js');

//create a new Discord client
const client = new Discord.Client();

client.on('message', message => {
  //this handles all the chart requests
if (message.channel.name == "reaper-chat"){
  if (message.toString().toLowerCase().includes('<@&806179797897052180>')){
    message.channel.send("Message recieved");
    client.channels.cache.get('820115139805052959').send(message.toString() + "\nFrom: " + message.author.toString());
  }
}

if(message.author.toString() == '<@666088354147729420>' && message.toString().toLowerCase().includes('note') && message.toString().toLowerCase().includes('<@!776140051293274162>') ){
      client.channels.cache.get('820107636493385738').send(message.toString());
      message.channel.send("Note taken");

}
});

client.login('Nzc2MTQwMDUxMjkzMjc0MTYy.X6wiwA.qBBZnZtRhvtUaP4aeGs5DMuls34');

