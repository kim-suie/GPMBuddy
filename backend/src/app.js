const express= require("express");
const cors= require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const departmentRoutes = require("./routes/departmentRoutes");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const errorHandler = require("./middleware/errorMiddlewares");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.get("/chat-test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "chat-test.html"));
});

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res){
    let response={
        "username":"sahil",
        "age": 17
    }
    res.send(req.admin);
})

app.use("/api/department", departmentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.use(errorHandler);

module.exports=app;