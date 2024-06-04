import {Header, Button, ButtonGroup, Container} from "semantic-ui-react"

export default function ChatMenuHeader() {
  return (
    <>
    <Header as="h3">Chats</Header>
    
    <Container style={{
        border: "none",
        paddingLeft: "10px",
        paddingBottom: "5px",
      }}>
      <ButtonGroup vertical basic fluid style={{minWidth:"100px"}}>
          <Button icon="add"
              content="Chat"
              labelPosition="right"
              size="large"
              
          />
          <Button icon="add" 
              content="Contact"
              labelPosition="right"
              size="large"
          />
      </ButtonGroup>
    </Container>
    </>
  )
}