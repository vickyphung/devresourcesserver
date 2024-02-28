const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI);

// async function main(){
//     await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})


db.on('error', (error) => {
    console.log(error.message);
})

db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
  });
  

db.on('disconnected', () => {
    console.log("mongo disconnected")
})

// }

db.on('open', () => {
    console.log("connection made")
})

// module.exports = main