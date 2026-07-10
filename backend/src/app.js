const express= require("express");
const cors= require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/test", function (req, res){
    let response={
        "username":"sahil",
        "age": 17
    }
    res.json(req.body);
    console.log(req.body);
    return req.body;
})

module.exports=app;