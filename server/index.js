//Import dependencies
import express from 'express';
import mongodb from 'mongodb';
import cors from 'cors';

//Configure MongoDB
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();

const db = mongoClient.db('boardgame-eshop-api');
const userCollection = db.collection('users');
const itemCollection = db.collection('items');
const orderCollection = db.collection('orders');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors({origin: "*"}));
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

//Methods
app.get('/items', async (req, res) => {
    const items = await itemCollection.find({}).toArray();

    res.json(items);
});

app.post('/add-item', async (req, res) => {
    const newItem = req.body;

    await itemCollection.insertOne(newItem);

    res.status(200).end();
});

app.get("/item-search/:query", async (req, res) => {
    const query = req.params.query;

    let filter = {$or:[
        {title: {$regex: `${query}`, $options: 'i'}},
        {publisher: {$regex: `${query}`, $options: 'i'}}
    ]};

    const filteredItems = await itemCollection.find(filter).toArray();

    res.json(filteredItems);
});

app.post('/create-user', async (req, res) => {
    const newUser = req.body;
    const users = await userCollection.find({}).toArray();
    let isUniqueUser = true;

    for (let user of users) {
        if (user.email == newUser.email) {
            isUniqueUser = false;
        }
    }

    if (isUniqueUser) {
        await userCollection.insertOne(newUser);
        res.json(newUser);
    } else {
        res.statusMessage = "This email is already being used for an active account!";
        res.status(400).end();
    }
});

app.post('/login', async (req, res) => {
    const loginDetails = req.body;
    const users = await userCollection.find({}).toArray();
    let correctLogin = false;
    let userDetails = {};

    for (let user of users) {
        if (user.email === loginDetails.email && user.password === loginDetails.password) {
            correctLogin = true;
            userDetails = user;
        }
    }

    if (correctLogin) {
        res.json(userDetails);
    } else {
        res.statusMessage = "Email and password do not match!";
        res.status(400).end();
    }
});

//Save the newest version of the user cart to the DB with every change
app.patch('/update-user-cart/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail;
    await userCollection.updateOne({ "email": userEmail }, { $set: req.body });
    console.log(req.body);
    res.status(200).end();
});

//Create an order from the current cart
app.post('/create-order', async (req, res) => {
    const newOrder = req.body;

    await orderCollection.insertOne(newOrder);

    res.status(200).end();
});

//Get all orders
app.get('/all-orders', async (req, res) => {
    const orders = await orderCollection.find({}).toArray();

    res.json(orders);
});

//Get orders for one user
app.get("/user-orders/:email", async (req, res) => {
    const email = req.params.email;
    console.log(email);

    const filteredItems = await orderCollection.find({email: email}).toArray();

    res.json(filteredItems);
});

//Update the status of an order
app.patch('/update-order-status/:id', async (req, res) => {
    const id = req.params.id;

    await orderCollection.updateOne({"orderNo": id }, { $set: req.body });
    console.log(req.body);

    res.status(200).end();
});

// Keep server running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});