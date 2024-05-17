import {
    GridRow,
    GridColumn,
    Grid,
    Container,
  } from "semantic-ui-react"
  import ChatMenu from "./ChatMenu"
  import ChatConversation from "./ChatConversation"
  
  export default function ChatRoom() {
  
    return (
      <>
        {" "}
        <Container
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <Grid columns={2} divided>
            <GridRow>
              <GridColumn width={4}>
                <ChatMenu />
              </GridColumn>
              <GridColumn width={12}>
                <ChatConversation />
              </GridColumn>
            </GridRow>
          </Grid>
        </Container>
      </>
    );
  }