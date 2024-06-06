// util/mongodb.ts
import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient;
let cachedDb: Db;

async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return { client: cachedClient, db: cachedDb };
  }

  cachedClient = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await cachedClient.connect();
  cachedDb = cachedClient.db(process.env.MONGODB_DB);

  return { client: cachedClient, db: cachedDb };
}

export { connectToDatabase };
