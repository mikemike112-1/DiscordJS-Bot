module.exports = {
    name: "!output",
    execute(client, sqlite3, message, args) {
        return new Promise(resolve => {

            console.log('Bready');

            let db = new sqlite3.Database('./commands/data/dataone.db', sqlite3.OPEN_READWRITE);

            //this needs to be run before you try to access the table
            db.run("CREATE TABLE IF NOT EXISTS trades(id TEXT NOT NULL, boughtsold TEXT NOT NULL, symbol TEXT NOT NULL, contract TEXT NOT NULL, expiration TEXT NOT NULL)", function (err, result) {
                console.log('Bready2');

                let userid = message.author.id; //user's id
                let db = new sqlite3.Database('./commands/data/dataone.db', sqlite3.OPEN_READWRITE);


                let query2 = 'SELECT * FROM trades WHERE boughtsold = ?';
                console.log("noerror2");

                if (err) {
                    console.log(err);
                    console.log("error2");
                }

                if(args.length != 2){
                    client.channels.cache.get('820095193800900618').send("Please try again and choose an option: \nbought \nsold");
                }

                var variableOption = '!' + args[1]; 
                

                db.all(query2, [variableOption], (err, rows) => {
                    if (err) {
                        console.log("error1");
                        return console.error(err.message);
                    }
                    for (var x = 0; x < rows.length; x++) {
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
                            client.channels.cache.get('820095193800900618').send(id2 + " " + boughtsold2 + " " + symbol2, + " " + contract2 + " " + expiration2);
                        }
                    }
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