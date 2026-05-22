import express from "express"
const app = express()

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.get('/', (req, res) => {
  res.json({
    Project : "Bug DevPulse",
  })
})

app.use("/api/auth",)


export default app;