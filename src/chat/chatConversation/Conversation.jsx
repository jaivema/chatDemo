import {Segment, Container} from "semantic-ui-react"
import ChatInfo from "./Info"
import ConversationFeed from "./ConversationFeed"


export default function ChatConversation(user) {
  return (
    <>
    <Segment clearing>
      <ChatInfo userId={user.userId} />
    </Segment>

    <Container>
      <ConversationFeed userId={user.userId}/>
    </Container>
    </>
  );
}