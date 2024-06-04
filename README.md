# README

### This project is a React application created using Vite, with dependencies including:

<a href="https://github.com/vitejs/vite-plugin-react-swc">@vitejs/plugin-react-swc</a> uses <a href="https://swc.rs/" rel="nofollow">SWC</a> for Fast Refresh

* Websockets to connect with AWS Server
* Hooks: useReducer, useState, useContext
* Semantic CSS

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
