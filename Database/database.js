var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
});

con.connect(function (err) {
    if (err) {
        console.log(err.toString());
    } else {
        console.log("Connected!");
        dropDb();
        createDatabase();
        useDB();
        createUsersTables();
        createBadgesTable()
        createPLayersTable();
        insertUsers();
        insertPlayers();
        insertBadges();
        selectUsers();

    }
});

function createDatabase() {
    con.query("CREATE DATABASE mydb;", function (err) {
        if (err) console.log(err.toString());
        console.log("Database created");
    });
}

function createUsersTables() {
    var sql = "CREATE TABLE  users (id int NOT NULL AUTO_INCREMENT , user_name VARCHAR(255) NOT NULL UNIQUE , name VARCHAR(255) NOT NULL , last_name VARCHAR(255) NOT NULL , age int NOT NULL , points int NOT NULL , PRIMARY KEY (id));";
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log("Table created");
        }
    });

}

function createBadgesTable() {
    var sql = "CREATE TABLE badges (id int NOT NULL AUTO_INCREMENT , title VARCHAR(255) NOT NULL , picture VARCHAR(255) , points int NOT NULL ,  PRIMARY KEY (id));";
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log("Table created");
        }
    });
}

function createPLayersTable() {
    var sql = "CREATE TABLE players (id int NOT NULL AUTO_INCREMENT , firstname VARCHAR(255) NOT NULL , lastname VARCHAR(255) NOT NULL , picture VARCHAR(255) , position VARCHAR(255) NOT NULL, birthday VARCHAR(255) NOT NULL , height VARCHAR(255) NOT NULL , number int NOT NULL , sponsor VARCHAR(255),  PRIMARY KEY (id));";
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log("Table created");
        }
    });
}

function insertBadges() {
    var sql = "INSERT INTO badges (title, picture, points) VALUES ('Gratis Bier', 'http://www.lieschtler-pizza.ch/produkt/152-heineken-0-5l/', 20)";
    con.query(sql, function (err) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log("1 record inserted");
        }
    });

}

function insertPlayers() {
    var sql = "INSERT into players (firstname, lastname, picture, position, birthday, height, number, sponsor) VALUES ('Guillaume', 'Hoarau', 'https://www.transfermarkt.ch/guillaume-hoarau/profil/spieler/23934', 'Stürmer', '5. März 1984','1.92m', 99, 'Nike')";
    con.query(sql, function (err) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log("1 record inserted");
        }
    });

}

function insertUsers() {
    var sql = "INSERT INTO users (user_name, name, last_name, age, points) VALUES ('evt.59', 'Yunus', 'Türkes', 18, 0)";
    con.query(sql, function (err) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log("1 record inserted");
        }
    });
    sql = "insert into players (firstname, lastname, picture, position, birthday, height, number, sponsor) VALUES ('Guillaume', " +
        "'Hoarau', 'https://www.transfermarkt.ch/guillaume-hoarau/profil/spieler/23934', 'Stürmer', '5. März 1984','1.92m', 99, 'Nike')\n"
}

function selectUsers() {
    con.query("SELECT * FROM users;", function (err, row, fields) {
        if (err) return console.error("no results were found!");
        console.log(row, fields);
        con.end();
    });
}

function dropDb() {
    con.query("DROP DATABASE if exists mydb", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('using mydb')
        }
    })
}

function useDB() {
    con.query('use mydb;', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('using mydb')
        }
    })
}

