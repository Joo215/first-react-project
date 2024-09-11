import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: "",
  });

  const inputTextChangeHandler = (event) => {
    setObjectState((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const inputNumberChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputdateChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

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
            onChange={inputTextChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={objectState.price}
            onChange={inputNumberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={objectState.today}
            onChange={inputdateChangeHandler}
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
