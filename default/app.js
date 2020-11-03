const createError = require("http-errors");
const express = require("express");

const compression = require("compression");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const webRoutes = require("./routes/web/index");
const appRoutes = require("./routes/app/index");
const webMw = require("./middleware/web/mw");
const appMw = require("./middleware/app/mw");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        store: new FileStore(),
        secret: "c55fv0IicgLyu4eq",
        resave: false,
        rolling: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 // SESSION 유효시간
        }
    })
);

app.use("/web", webMw);
for (let k in webRoutes) {
    app.use("/web/" + k, webRoutes[k]);
}
app.use("/app", appMw);

for (let k in appRoutes) {
    app.use("/app/" + k, appRoutes[k]);
}

app.get("/", (req, res) => {
    res.send("API SERVER");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
