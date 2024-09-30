import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  // 값이 바뀌는 경우. setEnteredEmail

  if (action.type === "USER_IMNPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  // 유효성겁사를 해야하는 경우, setEmailIsValid
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value || "",
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isVaild: null,
  };
};

const passwordReducer = (state, action) => {
  // 값이 바뀌는 경우. setEnteredEPassword

  if (action.type === "USER_IMNPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  // 유효성겁사를 해야하는 경우, setPasswordIsValid
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value || "",
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isVaild: null,
  };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_IMNPUT", val: event.target.value });

    setFormIsValid(
      event.target.value.includes("@") && passwordState.isValid // email의 유효성을 바로 검사
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_IMNPUT", val: event.target.value });

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6 // password의 유효성을 바로 검사
    );
  };
  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            로그인
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
