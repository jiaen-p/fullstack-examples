let time = Date.now()
setInterval(()=>{
    let newtime = Date.now()
    console.log(newtime - time)
    time = newtime
}, 5000)
/*
Definicion de nodejs.org:

Schedules execution of a one-time callback after delay milliseconds.

The callback will likely not be invoked in precisely delay milliseconds.
Node.js makes no guarantees about the exact timing of when callbacks will fire, nor of their ordering. 
The callback will be called as close as possible to the time specified. 
------------------------------------------------------------------------------------------------------
    la ejecucion de setInterval se hace lo más proximo
    al intervalo definido, no se garantiza los tiempos de ejecucion de las callbacks. 
    Para una ejecucion mas determinista a lo mejor hay que pasar a otro lenguaje
*/