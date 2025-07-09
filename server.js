const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const PORT = 5050;

const MONGO_URL = "mongodb+srv://DOCKER:DOCKER123@cluster0.lzvcwli.mongodb.net/apnacollege-db?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(MONGO_URL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect once at server startup
async function startServer() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("apnacollege-db");

    app.get("/", async (req, res) => {
      try {
        const users = await db.collection("users").find({}).toArray();
        res.send(users);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching users");
      }
    });

    app.post("/addUser", async (req, res) => {
      try {
        const result = await db.collection("users").insertOne({ name: "Urvashi", age: 20 });
        res.send("User added: " + result.insertedId);
      } catch (err) {
        console.error("Error adding user:", err);
        res.status(500).send("Failed to add user");
      }
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
  }
}

startServer();
