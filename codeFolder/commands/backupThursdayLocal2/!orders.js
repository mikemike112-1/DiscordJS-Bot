module.exports = {
    name: "&orders",
    execute(client, sqlite3, message, args, fileLocation, createTableTrades, insertIntoAllColumns, lab1, lab2, errorMessages) {
        return new Promise(resolve => {

            console.log('Bready');

            let db = new sqlite3.Database(fileLocation, sqlite3.OPEN_READWRITE);
            let query2 = 'SELECT * FROM trades WHERE boughtsold = ?';
            var orderType = '!' + args[1];

            //this needs to be run before you try to access the table
            db.run(createTableTrades, function (err, result) {
                if (err) {
                    console.log(err);
                    console.log("error2");
                }

                if (args.length != 2 || args[1] != 'bought' || args[1] != 'sold') {
                    client.channels.cache.get(lab2).send("Please try again and append an option: \nbought \nsold");
                }

                var sendThis = "";

                db.all(query2, [orderType], (err, rows) => {
                    if (err) {
                        console.log("error1");
                        return console.error(err.message);
                    }
                    for (var x = rows.length - 1; x > (rows.length - 11); x--) {
                        console.log("rows amount: " + rows.length);
                        if (rows == undefined) {
                            return;
                        } else {
                            console.log("in the else");
                            let id2 = rows[x].id;
                            let boughtsold2 = rows[x].boughtsold;
                            let symbol2 = rows[x].symbol;
                            let contract2 = rows[x].contract;
                            let expiration2 = rows[x].expiration;
                            console.log(id2, boughtsold2, symbol2, contract2, expiration2);
                            //client.channels.cache.get(lab2).send("meme");
                            client.channels.cache.get(lab2).send(id2 + " " + boughtsold2 + " " + symbol2 + " " + contract2 + " " + expiration2);
                            //sendThis = id2 + " " + boughtsold2 + " " + symbol2, + " " + contract2 + " " + expiration2 + "\n" + sendThis;
                        }
                    }
                    //client.channels.cache.get(lab2).send(sendThis);
                });

                console.log('Bready6');
                return resolve("whatever anything");

            });
        });
    }
}

/*
                        console.log("in the if");
                        let insertdata = db.prepare('INSERT INTO positions VALUES (?,?,?)');
                        insertdata.run(999, 'zzz', 'neutral');
                        insertdata.finalize();
                        db.close();
                        */

/*
   console.log("noerror1");


                    return row
                    ? console.log(row.id, row.stock, row.openpositions)
                    : console.log('Nothing here mate');
                    */