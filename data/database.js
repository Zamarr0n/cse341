const dotenv = require("dotenv");
dotenv.config();

const mongo = require("mongodb");
async function main(){
const password =  encodeURIComponent(process.env.MONGO_URL);
const URL = password;
const client = new mongo.MongoClient(URL);
try {
    await client.connect();
    console.log("DB Conected")

} catch (error){
    console.log(error)
} finally {
    await client.close();
}

}


module.exports = {
    main
};