
import {
  Grid,
  Image,
  List,
} from "semantic-ui-react"

export default function ContactsList() {

  const id1 = 1;
  const id2 = 2;

  return (
    <>
      <List divided relaxed>
        <List.Item id={id1} onClick={(e) => console.log(e, "id: ", id1)}>
          <Grid>
            <Grid.Column width={5}>
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                circular
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <List.Header>Elliot</List.Header>
              <List.Description>Last seen...</List.Description>
            </Grid.Column>
          </Grid>
        </List.Item>

        <List.Item id={id2} onClick={(e) => console.log(e, "id: ", id2)}>
          <Grid>
            <Grid.Column width={5}>
              <Image
                src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                circular
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <List.Header>Joe</List.Header>
              <List.Description>Last seen...</List.Description>
            </Grid.Column>
          </Grid>
        </List.Item>
      </List>
    </>
  )
}