import React, { Component, useState } from "react";
import Message from "./Message";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      messeges: [
        { text: "text", self: true },
        { text: "text2", self: false },
      ],
    };
  }
  render() {
    const { messeges, text } = this.state;
    return (
      <div className="chat">
        <div className="conteiner chat__container">
          <div className="bring-out">
            <div className="chat__date-separator">
              {new Date().toLocaleTimeString()}
            </div>
            {messeges.map((item) => (
              <Message self={item.self} text={item.text} />
            ))}
          </div>
          <div className="chat__send-text">
            <textarea
              onChange={(e) => {
                this.setState({ text: e.target.value });
              }}
              value={text}
              placeholder="Введите текст"
              className="poleText"
            ></textarea>
            <button
              onClick={() => {
                let newMesseges = messeges;
                newMesseges.push({ text: text, self: false });
                this.setState({
                  text: "",
                  messeges: newMesseges,
                });
              }}
              className="buttonAdd"
            >
              Отправить
            </button>
            <button
              onClick={() => {
                let newMesseges = messeges;
                newMesseges.push({ text: text, self: true });
                this.setState({
                  text: "",
                  messeges: newMesseges,
                });
              }}
              className="buttonAdd __redButtonAdd"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
