module.exports = {
    lintOnSave: false,
    publicPath: "/",
    outputDir: "./dist/",
    configureWebpack: {
        resolve: {
            alias: {
                "@css": "@/assets/css",
                "@functional": "@/components/functional/",
                "@views": "@/components/views/",
                "@Utils": "@/script/utils.js"
            }
        }
    },
    devServer: {
        port: 4213,
        proxy: {
            "/": {
                target: "http://localhost:6363/"
            }
        }
    }
}