import React, { useState } from "react";
import "./Toast.css";
import ToastMessage from "./ToastMessage";

const Toast = ({ message }) => {
  const [text, setText] = useState("Sample");
  const buttonClickHandler = (title) => {
    setText("changed");
    console.log(title);
  };
  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message} />
      <p>{text}</p>
      <button
        className="toast__button"
        onClick={() => buttonClickHandler(message.title)}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Toast;
