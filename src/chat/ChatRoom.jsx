import {
  GridRow,
  GridColumn,
  Grid,
  Container,
  Button,
} from "semantic-ui-react"
import ChatMenu from "./chatMenu/Menu"
import ChatConversation from "./chatConversation/Conversation"
import { WebSocketContext } from "../APIComunication/SocketProvider"
import { useContext, useState } from "react"

export default function ChatRoom() {
  const [isConnected, , send] = useContext (WebSocketContext)
  const [isLogin, setIsLogin] = useState(false)
  const [userId, setUserId] = useState("");
  const sendFakeLogin = (chatId, userId) => {
    const fakeDataLogin = {
      action: "login",
      chatId,
      userId,
    };
    if (isConnected) send(JSON.stringify(fakeDataLogin));
    setIsLogin(true);
    setUserId(userId);
  };
  const fakeLogins = [
    { chatId: "party", userId: "elliot" },
    { chatId: "party", userId: "jenny" },
    { chatId: "party", userId: "matthew" },
    { chatId: "party", userId: "daniel" },
    { chatId: "party", userId: "laura" },
    { chatId: "party", userId: "helen" },
  ];
  return (
    <>
    {!isConnected ? ("Connecting ....") : !isLogin ? (
      <Container textAlign="center" style={{ marginTop: "100px" }}>
        {fakeLogins.map((login, index) => (
          <Button style={{
            marginBottom: "25px",
            marginLeft: "25px",
          }}
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
      <Container style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px",
        }}>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn width={4}>
              <ChatMenu />
            </GridColumn>
            <GridColumn width={12}>
              <ChatConversation userId={userId} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    )}
    </>
  );
}