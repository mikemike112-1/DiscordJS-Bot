module.exports = {
    name: "&sold",
    execute(client, sqlite3, message, args, fileLocation, createTableTrades, insert4, insert5, insert6, lab1, lab2, errorMessages) {
        return new Promise(resolve => {

            console.log('!ready');
            let db = new sqlite3.Database(fileLocation, sqlite3.OPEN_READWRITE);

            //this needs to be run before you try to access the table

            db.run(createTableTrades, function (err, result) {
                console.log('!ready2');

                let db = new sqlite3.Database(fileLocation, sqlite3.OPEN_READWRITE);

                console.log('!ready3');

                if (args.length < 5 - 1 || args.length > 5 - 1) {
                    client.channels.cache.get(lab2).send('Need 4 parameters. You entered: ' + args.length);
                    client.channels.cache.get(lab2).send('Make sure to include all things:\n bought OR sold \n symbol \n contract \n expiration');

                    console.log('need 4 parameters. found: ' + args.length);
                    return;
                }

                var k;
                let query3 = 'SELECT * FROM trades';
                db.all(query3, [], (err, rows) => {

                    if (err) {
                        console.log("error1");
                        return console.error(err.message);
                    }
                    for (k = 0; k < rows.length; k++) {
                        total = k;
                    }

                    let dataforserver = db.prepare(insert4); //number of "?" must match the number of columns

                    dataforserver.run((k + 1), args[0], args[1], args[2], args[3]); //insert 5 default values for each column
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