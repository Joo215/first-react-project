import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: "",
  });
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [today, setToday] = useState("");

  // const inputTypeTextChangeHandler = (event) => {
  //   setName(event.target.value); // 상태 업데이트
  // };

  // const inputTypeNumberChangeHandler = (event) => {
  //   setPrice(event.target.value); // 상태 업데이트
  // };

  // const inputTypedateChangeHandler = (event) => {
  //   setToday(event.target.value); // 상태 업데이트
  // };

  const inputTypeTextChangeHandler = (event) => {
    setObjectState((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const inputTypeNumberChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTypedateChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  // const buttonSubmitHandler = () => {
  //   console.log("name : ", name);
  //   console.log("price : ", price);
  //   console.log("Today : ", today);
  // };

  const buttonSubmitHandler = () => {
    console.log("name : ", objectState.name);
    console.log("price : ", objectState.price);
    console.log("Today : ", objectState.today);
  };

  return (
    <form>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input
            type="text"
            value={objectState.name}
            onChange={inputTypeTextChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={objectState.price}
            onChange={inputTypeNumberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={objectState.today}
            onChange={inputTypedateChangeHandler}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="button" onClick={buttonSubmitHandler}>
          결제 추가
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
