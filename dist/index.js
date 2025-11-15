import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        messge: "container is up"
    });
});
app.post("/user", async (req, res) => {
    const { username, password } = req.body;
    await prisma.user.create({
        data: {
            username,
            password
        }
    });
    res.json({
        messge: "container is up"
    });
});
app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json({
        users
    });
});
app.listen(3001);
//# sourceMappingURL=index.js.map