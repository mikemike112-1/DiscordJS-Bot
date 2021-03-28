module.exports = {
    name: "!sold",
    execute(client, sqlite3, message, args) {
        return new Promise(resolve => {

            console.log('!ready');

            let db = new sqlite3.Database('./commands/data/dataone.db', sqlite3.OPEN_READWRITE);

            //this needs to be run before you try to access the table
            //db.run('CREATE TABLE IF NOT EXISTS users(userid TEXT NOT NULL, value2 TEXT NOT NULL...)');
            db.run("CREATE TABLE IF NOT EXISTS trades(id TEXT NOT NULL, boughtsold TEXT NOT NULL, symbol TEXT NOT NULL, contract TEXT NOT NULL, expiration TEXT NOT NULL)", function (err, result) {
                console.log('!ready2');

                let userid = message.author.id; //user's id
                let db = new sqlite3.Database('./commands/data/dataone.db', sqlite3.OPEN_READWRITE);
                let query = `SELECT * FROM trades WHERE id = ?`; //select everything from the table users where userid will be inside the [] in the next line
                db.get(query, [userid], (err, row) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('!ready3');

                    if (row === undefined) { //if their data is not in the database
                        console.log('!ready4');

                        if (args.length < 5-1 || args.length > 5-1) {
                            client.channels.cache.get('820095193800900618').send('need 5 parameters. found: ' + args.length);
                            console.log('need 4 parameters. found: ' + args.length);
                            return;
                        }

                        let dataforserver = db.prepare('INSERT INTO trades VALUES (?, ?,?,?,?)'); //number of "?" must match the number of columns
                        dataforserver.run(0, args[0], args[1], args[2], args[3]); //insert 5 default values for each column
                        dataforserver.finalize(); //finalize it
                        db.close(); //close the database
                    } else {
                        console.log('!ready5');

                        //the row is where all the data is, it is a JSON object and can be accessed easily
                        //....let info = row.info; //if you had a column named "info"
                        //or update something
                        //....db.run('UPDATE users SET info = ? WHERE userid = ?', ["new info", userid]); //update the table called "users", set the column equal to the first thing in the array at the end, aka "new info" where the userid is equal to the userid
                        db.close(); //close the database
                    }
                });
                console.log('!ready6');

                return resolve("whatever anything");

            });
        });
    }
}