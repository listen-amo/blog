const staticApp = require("koa-static");
const basePath = __dirname + "./../../../blog-web/";
module.exports = staticApp(basePath);