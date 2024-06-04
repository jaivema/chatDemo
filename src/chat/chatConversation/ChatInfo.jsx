import {Header, Label} from "semantic-ui-react"

export default function ChatInfo ({user}) {
    console.log(user)
    
    return (
        <>
        <Header as="h3" floated="left" style={{color: "grey"}}>
            {user.name}{", "}{user.chatSelected}
        </Header>
        <Header as="h5" floated="right">
            <Label circular color={"green"} key={"green"}>
                Connected
            </Label>
            <Label circular color={"teal"} key={"teal"}>
                Log out
            </Label>
        </Header>
        </>
    )
}