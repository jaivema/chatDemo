import {
  GridRow,
  GridColumn,
  Grid,
  Container,
  Button,
} from "semantic-ui-react"
import ChatMenu from "./chatMenu/ChatMenu"
import ChatConversation from "./chatConversation/ChatConversation"
import { WebSocketContext } from "../APIComunication/SocketProvider"
import { useContext, useState, useEffect } from "react"

export default function ChatRoom() {
  const initUser = {
    name: "",
    avatar: "",
    isConnected: false,
    isLogin: false,
    userId: "",
    chatId: "",
    chatSelected: "home",
    chats: [],
    connectionId: ""
  }
  const [user, setUser] = useState(initUser)
  const [isConnected, message, send] = useContext (WebSocketContext)
  
  const sendFakeLogin = (chatId, userId) => {
    const loginOwnerUser = "owner#" & userId
    const fakeDataLogin = {action: "login", chatId, loginOwnerUser}

    if (isConnected) {
      send(JSON.stringify(fakeDataLogin))
    
      setUser({
        ...user,
        userId: userId,
        chatId: chatId,
        isConnected: isConnected
      })
    }
  }

  const fakeLogins = [
    { chatId: "elliot", userId: "elliot" },
    { chatId: "helen", userId: "helen" },
    { chatId: "matthew", userId: "matthew" },
    { chatId: "daniel", userId: "daniel" },
    { chatId: "laura", userId: "laura" },
    { chatId: "jenny", userId: "jenny" }
  ]
  
  useEffect(() => {
    if (message) {
      var isLogged = false
      isLogged = JSON.parse(message).action === "logged in"
      if (isLogged) {
        setUser({
          ...user,
          connectionId: JSON.parse(message).connectionId,
          chats: JSON.parse(message).dataOwner.chats,
          name: JSON.parse(message).dataOwner.fullName,
          avatar: JSON.parse(message).dataOwner.avatar,
          isLogin: true
        })
      }
    }
  }, [message])
  
  return (
    <>
    {!isConnected ? ("Connecting ....") : !user.isLogin ? (
      <Container textAlign="center" style={{ marginTop: "100px" }}>
        
        {fakeLogins.map((login, index) => (
          <Button style={{ marginBottom: "25px", marginLeft: "25px" }}
            color="blue"
            circular
            key={index}
            onClick={() => sendFakeLogin(login.chatId, login.userId)}
          >
            Fake Login user: {login.userId} & chat: {login.chatId}
          </Button>
        ))}
      </Container>
    ) : (
      <Container style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", marginBottom: "10px" }}>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn width={4}>
              <ChatMenu />
            </GridColumn>
            <GridColumn width={12}>
              <ChatConversation user={user} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    )}
    </>
  )
}