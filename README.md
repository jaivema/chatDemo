# Home

### .env.local definition:
VITE_ENDPOINT=**wss://<u>userkey</u>.execute-api.eu-central-1.amazonaws.com/test**

### This project is a React application created using Vite, with dependencies including:

<a href="https://github.com/vitejs/vite-plugin-react-swc">@vitejs/plugin-react-swc</a> uses <a href="https://swc.rs/" rel="nofollow">SWC</a> for Fast Refresh

* Websockets to connect with AWS Server
* Hooks: useReducer, useState, useContext
* Semantic CSS

## AWS, Amazon Web Services, architecture as a server-side:

* Lambda
* DynamoDB
* API Gateway
  [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/)
  [AWS Identity and Access Management](https://aws.amazon.com/iam/)

## WebSockets

WebSockets is a communication protocol that enables real-time, bidirectional communication between a client (usually a web browser) and a server. It provides a persistent connection that allows for efficient data exchange without the need for repeated HTTP requests.

WebSockets are particularly useful for applications that require instant updates, such as real-time chat applications, collaborative editing tools, and live data streaming.

In React, you can leverage the power of WebSockets by using libraries like Socket.IO or the native WebSocket API. These libraries enable you to establish a WebSocket connection, send and receive messages, and handle events for seamless real-time communication in your React applications.

## CSS

* No animation dependencies

* Simple declarative component APIs vs brittle HTML markup

* Complete keyboard support

* Complete SUI component definition support

* Completely documented

* Completely tested

* Accessible
  
  ### Semantic framework
  
  [npm semantic-ui-react](https://www.npmjs.com/package/semantic-ui-react)
  [Semantic UI React The official Semantic-UI-React integration.](https://react.semantic-ui.com/)

### Others: Shadcn framework

[shadcn/ui Build your component library](https://ui.shadcn.com/)
[Shadcn Chat](https://www.builtatlightspeed.com/theme/jakobhoeg-shadcn-chat)

## MongoDB

[Querying MongoDB in the Browser with React and the Web SDK](https://github.com/mongodb-developer/realm-web-example/tree/master)

## Example ref#

[real.web-example repository](https://github.com/mongodb-developer/realm-web-example/tree/master)

# Components tree

```mermaid
flowchart TD
    A1(Provider.js) --> A
    A2(Reducer.js)  --> A
    A[ChatRoom] --> B1[ChatConversation] 
                    B1              --> E1[ChatInfo]
                    B1              --> E2[ConversationFeed]    --> F1[DetailConversationFeed]
                    B1              --> E3[WriteMessage]
    A           --> B2[ChatMenu]    --> C1[ChatMenuHeader]
                    B2              --> C2[ChatMenuBody]
                                        C2                      --> D1[AddContact]
                                        C2                      --> D2[CreateChat]
                                        C2                      --> D3[ContactList]
    
```
