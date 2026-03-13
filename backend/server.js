import express from "express";
import cors from "cors";
import { PORT,NODE_ENV } from "./config/env.js";  
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({limit: "50mb"}));
 
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
    res.send("Hello From DALL-E!");
});

app.listen(PORT,async () => {
    console.log(`Server is running on port:${PORT} in ${NODE_ENV} mode`);
    await connectDB(); 
});

export default app;