const mongoose= require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () =>{
    try{
     await mongoose.connect(db,{
       // useNewURLParser: true,
       // useCreateIndex: true
     });
       console.log('Mongodb connected ...');
    }catch(err){
     console.error(err.message);
     // exiting process 
     process.exit(1);
    }
};




module.exports = connectDB;