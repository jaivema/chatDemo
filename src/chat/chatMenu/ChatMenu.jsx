import {Container, Divider} from "semantic-ui-react"
import ChatMenuHeader from "./ChatMenuHeader"
import ContactsList from "./ContactsList"

export default function ChatMenu({user, selectChat}) {
  return (
    <>
    <Container >
      <ChatMenuHeader minWidth={150}/>
    </Container>
    
    <Divider />
    
    <Container style={{
      border: "none",
      paddingTop: "30px",
      paddingLeft: "15px",
      paddingBottom: "5px",
      minWidth: "150px",
    }}>
      <ContactsList user={user} selectChat={selectChat} />
    </Container>
    </>
  )
}