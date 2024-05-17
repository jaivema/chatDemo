import {Container, Divider} from "semantic-ui-react"
import ChatMenuHeader from "./ChatMenuHeader"
import ContactsList from "./ContactsList"

export default function ChatMenu() {
  return (
    <>
    <Container >
      <ChatMenuHeader />
    </Container>
    
    <Divider />
    
    <Container style={{
      border: "none",
      paddingTop: "30px",
      paddingLeft: "15px",
      paddingBottom: "5px",
    }}>
      <ContactsList />
    </Container>
    </>
  );
}