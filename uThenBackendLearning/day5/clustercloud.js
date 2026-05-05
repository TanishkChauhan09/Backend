
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://atlas-sample-dataset-load-67f00e25ae6f5823f3330f1e:3mKlfl4vLGu3vK5O@2507.plmcrfq.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'CodingAdda';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Usemongodb');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
