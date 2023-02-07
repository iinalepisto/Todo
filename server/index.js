import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import todo from "./routes/todo.js";
import cors from "cors";

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDb")).catch(console.error);

app.use(cors());
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/todo", todo);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});