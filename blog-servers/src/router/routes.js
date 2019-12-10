const path = require("./paths.js");
const static = require("./../static/static.js");
const routes = {
    // 首页
    [path.root]: async (ctx, next)=>{
        ctx.request.url = "/index.html";
        await next();
    },
    // 静态文件
    "*": static
}

module.exports = routes;