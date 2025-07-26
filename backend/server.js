import express from "express"
import notesRoutes from "./src/routes/notesRoutes.js"
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./src/middleware/rateLimiter.js";
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT

const app = express();

//middleware
app.use(cors({
    origin : "http://localhost:5173"
}));
app.use(express.json()) // this middleware will parse json bodies : req.body
app.use(rateLimiter)


app.use("/api/notes", notesRoutes)

connectDB().then(()=>{
    app.listen(PORT, () => {
    console.log("server started  on PORT : ",PORT);
})
})




