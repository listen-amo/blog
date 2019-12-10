const Router = require("koa-router");
const routes = require("./routes.js");
const router = new Router();
let route, method, handler;
for(const url in routes){
    route = routes[url];
    if(typeof route === "function"){
        method = "get";
        handler = route;
    }else if(typeof route === "object"){
        if(route.method){
            method = route.method;
            handler = route.handler;
        }else{

        }
    }
    router[method](url, handler);
}

module.exports = router;