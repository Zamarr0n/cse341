const mongo = require('mongodb');
const Objectid = require('mongodb').ObjectId;

const password =  encodeURIComponent(process.env.MONGO_URL);
const URL = `mongodb+srv://emiliozamarrons:${password}@cluster1.lgljyqa.mongodb.net/project1`;

const client = new mongo.MongoClient(URL);

const getAll = async(req,res) =>{ 
    //#swagger.tags-['Users'] 
    const result = await client.db('project1').collection('users').find();
    result.toArray().then((users) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};


const getSingle = async(req,res) =>{
    //#swagger.tags-['Users']
    const userId = new Objectid(req.params.id);
    const result = await client.db('project1').collection('users').find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    }); 
};

const createUser = async(req, res) =>{
    //#swagger.tags-['Users']
    const user ={
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    };

    const response = await client.db('project1').collection('users').insertOne(user);
    if(response.acknowledged){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error ocurred while creating the user.`);
    }
}

const updateUser = async(req,res) => {
    //#swagger.tags-['Users']
    const userId = new Objectid(req.params.id);
    const user ={
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        ipaddress: req.body.ipaddress
    };
    const response = await client.db('project1').collection('users').replaceOne({_id: userId}, user);
    if(response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error ocurred while updating the user.`);
    }
}

const deleteUser = async(req,res) => {
    //#swagger.tags-['Users']
    const userId = new Objectid(req.params.id);
    const response = await client.db('project1').collection('users').deleteOne({_id: userId});
    if(response.deleteCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error ocurred while deleting the user.`);
    }
}


module.exports = {
    getAll, 
    getSingle,
    createUser,
    updateUser,
    deleteUser

}
