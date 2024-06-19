const mongo = require('mongodb');
const Objectid = require('mongodb').ObjectId;

const getAll = async(req,res) =>{
    const password =  encodeURIComponent(process.env.MONGO_URL);
    const URL = `mongodb+srv://emiliozamarrons:${password}@cluster1.lgljyqa.mongodb.net/project1`;
    const client = new mongo.MongoClient(URL);
    const result = await client.db('project1').collection('users').find();
    result.toArray().then((users) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};


const getSingle = async(req,res) =>{
    const password =  encodeURIComponent(process.env.MONGO_URL);
    const URL = `mongodb+srv://emiliozamarrons:${password}@cluster1.lgljyqa.mongodb.net/project1`;
    const client = new mongo.MongoClient(URL);
    const userId = new Objectid(req.params.id);
    const result = await client.db('project1').collection('users').find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getAll, getSingle
}
