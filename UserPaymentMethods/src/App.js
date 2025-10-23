import React from "react";
import UserPaymentMethods from "./UserPaymentMethods";

const App = (props) => {
  const emitter = props?.emitter || {
    emit: (event, data) => console.log("Mock emit:", event, data),
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserPaymentMethods emitter={emitter} />
    </div>
  );
};

export default App;
