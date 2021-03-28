//COME BACK LATER TO THIS ONE

function getpositions(sqlite3, message) {
    return new Promise(resolve => {
        let db = new sqlite3.Database('./commands/data/dataone.db', sqlite3.OPEN_READWRITE);
        let query = "SELECT * FROM positions";
        db.all(query, [], (err, rows) => {
            if (err) {
                console.log(err);
                db.close();
                return resolve(null);
            }
            if (rows === undefined) {
                message.channel.send("Unable to get positions.");
                db.close();
                return resolve(null);
            } else {
                db.close();
                let stocks = new Object();

                for (let i = 0; i < rows.length; i++) {
                    stocks[rows[i].stocks] = JSON.parse(rows[i].openpositions);

                    if (i == (rows.length - 1)) {
                        return resolve(stocks);
                    }
                }
            }
        });
    });
}

function getorders(sqlite3, message) {
    return new Promise(resolve => {
        let db = new sqlite3.Database('./commands/data/dataone.db', sqlite3.OPEN_READWRITE);
        let query = "SELECT * FROM orders";
        db.all(query, [], (err, rows) => {
            if (err) {
                console.log(err);
                db.close();
                return resolve(null);
            }
            if (rows === undefined) {
                message.channel.send("Unable to get orders.");
                db.close();
                return resolve(null);
            } else {
                db.close();
                return resolve(rows);
            }
        });
    });
}

module.exports.getpositions = getpositions;
module.exports.getorders = getorders; 