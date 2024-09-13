import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
          {/* <div>
           <p>필수품</p>
            <div>
              <input type="radio" id="yes" value="yes" name="necessity" />
              <label for="yes">O</label>
            </div>
            <div>
              <input type="radio" id="no" value="no" name="necessity" />
              <label for="no">X</label>
            </div>
          </div>
          <div className="new-payment__control">
            <label>영수증사진</label>
            <div>
              <input type="file" />
            </div>
          </div>
          <div>
            <p>지불방법</p>
            <div>
              <input type="checkbox" id="creditCard" />
              <label for="creditCard">CreditCard</label>
            </div>
            <div>
              <input type="checkbox" id="checkCard" />
              <label for="checkCard">CheckCard</label>
            </div>
            <div>
              <input type="checkbox" id="cash" />
              <label for="cash">Cash</label>
            </div>
            <div>
              <input type="checkbox" id="giftcertificate" />
              <label for="giftcertificate">Gift Certificate</label>
            </div>
          </div> */}
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
