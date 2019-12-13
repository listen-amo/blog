// 频率限制
function frequency(cb, frequency = 50/3){
    let flag = true;
    return function(){
        let _this = this, _args = arguments;
        if(flag){
            flag = false;
            setTimeout(function(){
                cb.apply(_this, _args);
                flag = true;
            }, frequency);
        }
    }
}
// 不定参处理
function uncertainArgs(args, n, defaultValue){
    args = Array.from(args);
    if(getType(args[n]) !== getType(defaultValue)){
        args.splice(n, 0, defaultValue);
    }
    return args;

}
// 获取数据类型
function getType(target){
    return /^\[object\s(.+)\]$/.exec(Object.prototype.toString.call(target))[1];
}
// 封装的dom事件
export const events = {
    listener(target, eName, cb, options){
        let _cb, _options = {
            limiting: true, // 是否限制频率
            useCapture: false, // 是否在捕获阶段触发事件
            removable: false, // 是否可能会移除事件
            frequency: 50/3, // 频率（ms）
            ...options
        };
        _cb = _options.limiting? frequency(cb, _options.frequency): cb;
        target.addEventListener(eName, _cb, _options.useCapture);
        return _options.removable && function(){
            target.removeEventListener(eName, _cb, _options.useCapture);
        }
    },
    resize(target, cb, options){
        [target, cb, options] = uncertainArgs(arguments, 0, window);
        return this.listener(target, "resize", cb, options);
    }
}
export default {
    events,
    frequency,
    getType,
    uncertainArgs
}