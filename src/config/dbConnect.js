import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://mcapucho:q1w2e3r4@mcapucho.4czme3c.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;