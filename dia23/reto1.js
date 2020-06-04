setTimeout( () => {
    console.log("after 1 second")
    setImmediate( ()=>{
        process.nextTick(()=>{console.log("initial loop event")})
        console.log("last process after finish the loop")
    })
}, 1000);
