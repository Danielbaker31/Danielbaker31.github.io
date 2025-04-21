import React, { useState, useRef } from "react";
import headshot from "../Assets/square_ai_spiderman_headshot.jpg";
import "../Styles/Chatbot.css";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);

  const send = () => {
    if (!input) return;
    setMessages(m => [...m, { who: "user", text: input }]);
    setTimeout(() => {
      setMessages(m => [...m, { who: "bot", text: "Oops! Backend not connected yet! 😊" }]);
    }, 400);
    setInput("");
  };

  return (
    <div className="chatbot-page">
      <div className="hero">
        <div className="home-image-wrapper">
          <img src={headshot} alt="Daniel Baker headshot" className="home-image" />
        </div>
        <h2 className="name">Daniel Baker</h2>

        <p className="student-bio">
          I am a computer engineering and economics student.
        </p>
        
        <p className="subheading">What do you want to know about me?</p>
      </div>

      <div className="chat-window">
        <div className="messages">
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.who}`}>{m.text}</div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="input-row">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="Ask me anything…"
          />
          <button onClick={send}>➤</button>
        </div>
      </div>
    </div>
  );
}
