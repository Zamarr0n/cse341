const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info:{
        title: "Users Api",
        description:"Users Api"
    },
    host: "localhost:8080",
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile,endpointsFiles,doc)

// cse341-uldw.onrender.com