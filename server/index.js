//Import dependencies
import express from 'express';
import mongodb from 'mongodb';
import cors from 'cors';

//Configure MongoDB
const mongoClient = new mongodb.MongoClient('mongodb://localhost:27017');
mongoClient.connect();

const db = mongoClient.db('boardgame-eshop-api');
const userCollection = db.collection('users');
const itemCollection = db.collection('items');
const orderCollection = db.collection('orders');

const PORT = 8080;
const app = express();

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

//Logging
const requestLogger = (request, response, next) => {
    const timestamp = new Date().toISOString();
    const method = request.method;
    const url = request.url;
    const currentTimeMs = Date.now();

    const logString = `
        Time: ${timestamp}
        Method: ${method}
        Url: ${url}
    `;

    request.on("end", () => {
        const elapsedTimeMs = Date.now() - currentTimeMs;
        console.log(`
            ${logString}
            Elapsed Time: ${elapsedTimeMs}ms
        `);
    });

    next();
};

app.use(requestLogger);

//Define methods - these need to be made into variables
app.get('/items', async (req, res) => {
    const items = await itemCollection.find({}).toArray();

    res.json(items);
});

//Define methods - these need to be made into variables
app.get('/users', async (req, res) => {
    const users = await userCollection.find({}).toArray();

    res.json(users);
});

app.post('/users', async (req, res) => {
    const newUser = req.body;

    await userCollection.insertOne(newUser);

    res.status(200).end();
});

app.delete('/users/:userId', async (req, res) => {
    const selectedUserId = req.params.userId;
    await userCollection.deleteOne({_id: selectedUserId});

    res.status(200).end();
});

app.put('/user/:userId', async (req, res) => {
    const selectedUserId = req.params.userId;
    await userCollection.replaceOne({_id: selectedUserId}, req.body);

    res.status(200).end();
});

app.patch('/user/:userId', async (req, res) => {
    const selectedUserId = req.params.userId;
    await userCollection.updateOne({_id: selectedUserId}, {$set: req.body});

    res.status(200).end();
});


// Keep server running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});