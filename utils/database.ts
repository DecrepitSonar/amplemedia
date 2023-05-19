import { MongoClient } from"mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb+srv://rob:12358132121@cluster0.xadsk.mongodb.net/?retryWrites=true&w=majority";

export const client = new MongoClient(uri);

export const connectToDB = async() =>  {
  try {
    await client.connect()
    console.log("connected");

    return client.db("myFirstDatabase")
  } catch(err ) {
    // Ensures that the client will close when you finish/error
    console.log( err )
  }
}