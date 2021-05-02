module.exports = {
    name: "&delete",
    execute(client, sqlite3, message, args, fileLocation, createTableTrades, insert4, insert5, insert6, lab1, lab2, errorMessages, internLounge, reaperChat, reaperCallOuts, executiveErrors) {
        return new Promise(resolve => {
            
            if ((message.author.toString() !== '<@666088354147729420>' && message.author.toString() !== '<@427616391206666252>')){
                return;
            } 

            var entryToDelete = args[1];
            let db = new sqlite3.Database(fileLocation, sqlite3.OPEN_READWRITE);

            var deleteQuery = "DELETE FROM trades7 WHERE id = ?";
            //client.channels.cache.get(lab1).send("length: " + args.length + "\nfirst param: " + args[0] + "\n second param: " +args[1]);
            //var a = array.length;
            if(args.length !== 2){
                client.channels.cache.get(executiveErrors).send("Need 2 parameters. Found: " + args.length);
            
                client.channels.cache.get(executiveErrors).send("\nMake sure your second parameter is ONLY the number for the order you want to delete. \n NO SYMBOL \n Example: \n &delete 74");
                return 0; 
                }

            db.all(deleteQuery, [entryToDelete], (err, rows) => {
                if (err) throw err;
                //client.query(deleteQuery, function (err, result) {
                //  if (err) throw err;
                  console.log("Deleted: " + entryToDelete);
                //});
              });
            
            return resolve("whatever anything");
        });
    }
}