var socket = io()

  socket.on('chat message', function(msg){
    console.log('message:  ' + msg)
  })

  socket.emit("chat message", "actual message")
