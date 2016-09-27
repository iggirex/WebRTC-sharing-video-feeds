var io = require('socket.io')()

io.on('connection', function(socket){
  console.log("A USER HAS CONNECTED")
  socket.on('chat message', function(msg){
    console.log('message:  ' + msg)
  })
  // io.on('disconnect', function(){
  //   console.log("A USER HAS DISCONNECTED")
  // })
})

module.exports = io
