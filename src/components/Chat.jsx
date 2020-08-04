import React, { Component, useState } from "react";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="chat">
      <div className="conteiner chat__container">
        <div className="bring-out">
          <Message text="доме, офисе, кабинете, мастерской" self />
          <Message text="доме, офисе, кабинете, мастерской" self />
          <Message text="Это означает," />
          <div className="chat__date-separator">
            {new Date().toLocaleTimeString()}
          </div>
          <Message text="доме, офисе, кабинете, мастерской" self />
          <Message text="Это означает," />
        </div>
        <div className="chat__send-text">
          <textarea placeholder="Введите текст" className="poleText"></textarea>
          <button className="buttonAdd">Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
