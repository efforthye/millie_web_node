const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const routes = require("./routes/index.js");
const { sequelize } = require("./models/index.js");


// const userbook = sequelize.define('userbook', {}, { timestamps: true });

// 크로스오리진
// npm i cors
const cors = require("cors");

dotenv.config();

const app = express();

app.set("port", 8081 || process.env.PORT);

app.use("/uploads", express.static("uploads"));

app.use("/", express.static(path.join(__dirname, "beforeMain/v3/login")));
app.use("/", express.static(path.join(__dirname, "beforeMain/v3/login")));
app.use("/", express.static(path.join(__dirname, "beforeMain")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);
app.use("/api", routes);

// 크로스오리진
app.use(cors({origin : "https://efforthye.com"}));
// app.use(cors({origin : "https://efforthye.com", credentials: true})); // 쿠키관련?
// app.use(cors({origin : "https://efforthye.com:8080"}));
// app.use(cors({origin : "https://efforthye.com:443"}));
// app.use(cors());

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(app.get("port"), () => {
  console.log(app.get("port")+"포트 포스팅서버오픈");
});
