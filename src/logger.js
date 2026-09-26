
const logDebug = (msg) => {
    
    return {
        info: ()=>{
            console.log('[info] ' + msg);
        },
        warn: ()=>{
            console.log('[warn] ' + msg);
        },
        error: ()=>{
            console.log('[error] ' + msg);
        }
    }
}

export default logDebug;