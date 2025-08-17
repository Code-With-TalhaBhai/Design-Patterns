// Low-level module: MySQL
class MySQLDatabase {
    saveToSQL(data: string): void {
        console.log(`Executing SQL Query: INSERT INTO users VALUES('${data}');`);
    }
}

// Low-level module: MongoDB
class MongoDBDatabase {
    saveToMongo(data: string): void {
        console.log(`Executing MongoDB Function: db.users.insert({name: '${data}'})`);
    }
}

// High-level module (Tightly coupled)
class UserService {
    private sqlDb: MySQLDatabase;
    private mongoDb: MongoDBDatabase;

    constructor() {
        this.sqlDb = new MySQLDatabase();
        this.mongoDb = new MongoDBDatabase();
    }

    storeUserToSQL(user: string): void {
        // MySQL-specific code
        this.sqlDb.saveToSQL(user);
    }

    storeUserToMongo(user: string): void {
        // MongoDB-specific code
        this.mongoDb.saveToMongo(user);
    }
}

// Main simulation
const service = new UserService();
service.storeUserToSQL("Aditya");
service.storeUserToMongo("Rohit");
