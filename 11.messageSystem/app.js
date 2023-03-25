const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const session = require("express-session");
const fileStore = require("session-file-store")(session);

const indexRouter = require("./routes");
const sessionRouter = require("./routes/session");
const userRouter = require("./routes/user");

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// app.use(session({
//     httpOnly : true,
//     resave : false,
//     secret : 'secret key',
//     store : new fileStore()
// }))

// page Route 담당
app.use("/", indexRouter);

// user 관리 담당 Router
app.use("/user", userRouter);

// session 관리 담당 Router
// app.use('/s', sessionRouter)

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중..");
});
