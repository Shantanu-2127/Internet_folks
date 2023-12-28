const { MongoClient} = require('mongodb');
const url = "mongodb+srv://shantanusisodia777:Shantanu21%40@cluster0.nllaztw.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'InternetFolks';

let db = null;
const connectToDatabase = async () => {
    if (db) {
        return db;
    }

    try {
        const client = await MongoClient.connect(url);
        db = client.db(dbName);
        console.log('Connected to MongoDB');
        return db;
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }
}

module.exports = connectToDatabase