const serversConfig = require("./configs/servers.config.js");
const Koa = require("koa");
const koaApp = new Koa();

const router = require("./router/router.js");
koaApp.use(router.routes());
koaApp.use(router.allowedMethods());

koaApp.listen(serversConfig.port, error=>{
    if(error) throw error;
    console.log("Service running. port:" + serversConfig.port);
});