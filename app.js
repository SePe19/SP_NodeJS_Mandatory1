const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public/'));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage.html").toString();
const nodeBasicsPage = fs.readFileSync("./public/pages/nodebasics.html").toString();
const expressPage = fs.readFileSync("./public/pages/express.html").toString();
const nodemonPage = fs.readFileSync("./public/pages/nodemon.html").toString();

const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Frontpage") + frontpage + footer;
const nodeBasicsPagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "NodeJS Basics") + nodeBasicsPage + footer;
const expressPagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Express") + expressPage + footer;
const nodemonPagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Nodemon") + nodemonPage + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/node", (req, res) => {
    res.send(nodeBasicsPagePage);
});

app.get("/express", (req, res) => {
    res.send(expressPagePage);
});

app.get("/nodemon", (req, res) => {
    res.send(nodemonPagePage);
});

app.listen(8080, () => {
    console.log("The server is running on port: 8080", 8080)
});