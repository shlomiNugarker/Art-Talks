import { Socket } from 'socket.io'

export default {
  connectSockets,
}

let gIo: any

function connectSockets(http: any, _session: any) {
  gIo = require('socket.io')(http, {
    cors: {
      origin: '*',
      pingTimeout: 60000,
    },
  })
  gIo.on('connection', (socket: Socket) => {
    socket.on('send-msg', async (updatedArt) => {
      const allSockets = await getAllSockets()
      if (!allSockets) return
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].id !== socket.id)
          allSockets[i].emit('get-msg', updatedArt)
      }
    })

    socket.on('disconnect', async (args) => {})
  })
}
async function getAllSockets() {
  if (!gIo) return
  const sockets: Socket[] = await gIo.fetchSockets()
  return sockets
}
