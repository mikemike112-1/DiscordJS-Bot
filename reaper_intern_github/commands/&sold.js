module.exports = {
    name: "&sold",
    execute(client, sqlite3, message, args, fileLocation, createTableTrades, insert4, insert5, insert6, lab1, lab2, errorMessages, internLounge, reaperChat, reaperCallOuts, executiveErrors) {
        return new Promise(resolve => {

            if ((message.author.toString() !== '<@666088354147729420>' && message.author.toString() !== '<@427616391206666252>')){
                return;
            } 

            console.log('!ready');
            let db = new sqlite3.Database(fileLocation, sqlite3.OPEN_READWRITE);

            //this needs to be run before you try to access the table

            db.run(createTableTrades, function (err, result) {
                console.log('!ready2');

                let db = new sqlite3.Database(fileLocation, sqlite3.OPEN_READWRITE);

                console.log('!ready3');

                if (args.length < 4 || args.length > 6 ) {
                    client.channels.cache.get(executiveErrors).send('Need 4, 5, or 6 parameters. You entered: ' + args.length);
                    client.channels.cache.get(executiveErrors).send('Make sure to include at least:\n bought OR sold \n symbol \n contract \n expiration');

                    console.log('need at least 4 parameters. found: ' + args.length);
                    return;
                }

                var k;
                let query3 = 'SELECT * FROM trades7';
                db.all(query3, [], (err, rows) => {

                    if (err) {
                        console.log("error1");
                        return console.error(err.message);
                    }
                    for (k = 0; k < rows.length; k++) {
                        total = k;
                    }

                    let dataforserver;

                    if (args.length == 4) {
                        dataforserver = db.prepare(insert6); //number of "?" must match the number of columns
                        dataforserver.run((k + 1), args[0], args[1], args[2], args[3], "", ""); //insert 5 default values for each column
                    }

                    if (args.length == 5) {
                        dataforserver = db.prepare(insert6); //number of "?" must match the number of columns
                        dataforserver.run((k + 1), args[0], args[1], args[2], args[3], args[4], ""); //insert 5 default values for each column
                    }

                    if (args.length == 6) {
                        dataforserver = db.prepare(insert6); //number of "?" must match the number of columns
                        dataforserver.run((k + 1), args[0], args[1], args[2], args[3], args[4], args[5]); //insert 5 default values for each column
                    }

                    dataforserver.finalize(); //finalize it
                    db.close(); //close the database
                    console.log('!ready4');

                    return resolve("whatever anything");

                });
                return resolve("whatever anything");
            });
        });
    }
}