import express from "express"
import { authRouter } from "./modules/auth/auth.router";
const app = express()

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.get('/', (req, res) => {
  res.json({
    Project : "Bug DevPulse",
  })
})

app.use("/api/auth",authRouter)


export default app;