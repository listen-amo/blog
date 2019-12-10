module.exports = {
    lintOnSave: false,
    publicPath: "/",
    outputDir: "./dist/",
    configureWebpack: {
        resolve: {

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