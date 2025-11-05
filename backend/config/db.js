const mongoose = require('mongoose');

const connectDB = async () => { 
    try {
        const con = await mongoose.connect('mongodb+srv://aquilon_northwind:syndronomika7305@cluster0.npeb6lk.mongodb.net/?appName=Cluster0');
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;