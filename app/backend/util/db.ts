import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  cachedClient = new MongoClient(process.env.MONGODB_URI!);

  await cachedClient.connect();
  cachedDb = cachedClient.db(process.env.MONGODB_DB!);

  return { client: cachedClient, db: cachedDb };
}

export { connectToDatabase };
