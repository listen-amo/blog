const { exec: EXEC } = require('child_process');
const PATH = require("path");
const commandArgs = [
    {
        command: "npm run serve",
        options: {
            cwd: PATH.join(__dirname, "/blog-servers/")
        }
    },
    {
        command: "npm run serve",
        options: {
            cwd: PATH.join(__dirname, "/blog-web/blog-web-app/")
        }
    }
];

function defaultCb(err){
    if(err){
        console.error(err)
    }else{
        console.log("进程结束");
    }
}

commandArgs.forEach(({ command, options, cb = defaultCb })=>{
    let childProcess = EXEC(command, options, cb);
    childProcess.stdout.on('data', (data) => {
        console.log(data);
    });
});