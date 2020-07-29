import { io } from "@/Core/Socket"

class SocketService {
	// eslint-disable-next-line
	emitRoomEvent (roomId: string, event: string, ...data: any) {
		const socket = io as any

		socket.binary(false).to(roomId).emit(event, ...data)
	}
}

export default new SocketService()
