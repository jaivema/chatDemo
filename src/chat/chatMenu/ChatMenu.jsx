import {Container, Divider} from "semantic-ui-react"
import ChatMenuHeader from "./ChatMenuHeader"
import ContactsList from "./ContactsList"

export default function ChatMenu({user, selectChat}) {
  return (
    <>
    <Container>
      <ChatMenuHeader />
    </Container>
    
    <Divider />
    
    <Container style={{
      paddingTop: "30px",
      paddingLeft: "15px",
      paddingBottom: "5px",
      minWidth: "250px"
    }}>
      <ContactsList user={user} selectChat={selectChat} />
    </Container>
    </>
  )
}