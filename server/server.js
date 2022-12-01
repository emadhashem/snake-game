

const io = require('socket.io')({
    cors : {
        origin : 'http://localhost:8080',
        credentials :true
    }
})

io.on('connection' , client => {
     client.emit('init' , {data : 'hello world!'})
})


io.listen(3000)