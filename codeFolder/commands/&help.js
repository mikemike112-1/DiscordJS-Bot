module.exports = {
    name: "&help",
    execute(client, sqlite3, message, args, fileLocation, createTableTrades, insert4, insert5, insert6, lab1, lab2, errorMessages, internLounge, reaperChat, reaperCallOuts, executiveErrors) {
        return new Promise(resolve => {
            
            var instructions = " ";

            if ((message.author.toString() == '<@666088354147729420>' || message.author.toString() == '<@427616391206666252>')){
                instructions = "Hi! commands are: \n &help \n &orders bought \n &orders sold \n &bought \n &sold \n &delete";
            }   else {
                instructions = "Hi! commands are \n &help \n &orders bought \n &orders sold";
            }

            console.log("help command called"); 
            client.channels.cache.get(internLounge).send(instructions);
            return resolve("whatever anything");
        });
    }
}