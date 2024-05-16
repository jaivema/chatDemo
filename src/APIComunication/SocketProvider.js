import { useState, useRef, useEffect, createContext } from "react"

const endpoint = import.meta.env.VITE_ENDPOINT;

const WebsocketContext = createContext(false, null,()=>{})

const SocketProvider = ({children})=>{
  const [isConnected, setIsConnected] = useState(false)
  const [message, setMessage] = useState(null)

  const websocket = useRef(null)
  
  useEffect(() => {
    const socket = new WebSocket(endpoint)
    
    socket.onopen = () => setIsConnected(true)
    socket.onclose = () => setIsConnected(false)
    socket.onmessage = (event) => setMessage(event.data)

    websocket.current = socket
    
    return () => {
      socket.close()
    }
  }, [])
  const actionsWebSocket = [
    isConnected,
    message,
    websocket.current?.send.bind(websocket.current)
  ];
  return (
    <WebsocketContext.Provider value={actionsWebSocket}>
      {children}
    </WebsocketContext.Provider>
  );
}
export default SocketProvider
