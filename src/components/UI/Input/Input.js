import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Login.module.css";

const Input = forwardRef((props, ref) => {
  const inputref = useRef();

  const active = () => {
    inputref.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: active,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputref}
      />
    </div>
  );
});

export default Input;
