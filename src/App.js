import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./ChatFeed";
import Loginform from "./Loginform";
function App() {
  if (!localStorage.getItem("username")) return <Loginform />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="acafeeb7-f742-47a7-ac2e-b461920c9128"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio("./notification.mp3").play()}
      />
    </>
  );
}

export default App;
