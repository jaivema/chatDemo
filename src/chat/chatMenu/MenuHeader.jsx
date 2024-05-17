import {Header, Button, ButtonGroup} from "semantic-ui-react"

export default function ChatMenuHeader() {
  return (
    <>
    <Header as="h3">Chats</Header>
    
    <ButtonGroup vertical basic fluid style={{minWidth:"90px"}}>
        <Button
            icon="add"
            content="Chat"
            labelPosition="right"
        />
        <Button
            icon="add" 
            content="Contact"
            labelPosition="right"
        />
    </ButtonGroup>
    </>
  );
}