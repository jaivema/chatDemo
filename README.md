# Home

### This project is a React application created using Vite, with dependencies including:

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

```dotnetcli
├── src
│   ├── APIcommunication
│   │   ├── SocketProvider.js
│   ├── layout
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   ├── chat
│   │   ├── MyChat.jsx
│   │   ├── Login.jsx
│   │   ├── Conversation.jsx
│   │   ├── ConversationDetail.jsx
│   ├── home
│   │   ├── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.js
│   ├── main.jsx
├── public
├── node_modules
├── package.json
├── package-lock.json
└── .gitignore
```
