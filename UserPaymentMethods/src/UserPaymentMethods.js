import React from "react";

// Create a context to match what AppShell will provide
const EmitterContext = React.createContext();

class UserPaymentMethods extends React.Component {
  state = {
    paymentMethods: [
      { id: 1, last4: "4242", brand: "Visa", isDefault: true },
      { id: 2, last4: "5555", brand: "Mastercard", isDefault: false },
      { id: 3, last4: "3782", brand: "American Express", isDefault: false },
    ],
  };

  handleMakeDefault = (id) => {
    const { emitter } = this.props;

    this.setState(
      (prevState) => ({
        paymentMethods: prevState.paymentMethods.map((method) => ({
          ...method,
          isDefault: method.id === id,
        })),
      }),
      () => {
        const defaultMethod = this.state.paymentMethods.find(
          (m) => m.id === id
        );
        if (emitter) {
          const notification = {
            type: "success",
            title: "Payment Method Updated",
            message: `${defaultMethod.brand} ending in ${defaultMethod.last4} is now your default payment method.`,
          };
          console.log("notification msg", notification);

          emitter.emit("notification", notification);
        }
      }
    );
  };

  render() {
    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#f0f9ff",
            padding: "0.5rem",
            borderRadius: "4px",
            marginBottom: "1rem",
            display: "inline-block",
          }}
        >
          React v{React.version}
        </div>
        <h2>Payment Methods</h2>
        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          {this.state.paymentMethods.map((method) => (
            <div
              key={method.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "500" }}>
                    {method.brand} ending in {method.last4}
                  </div>
                </div>
                <div>
                  {method.isDefault ? (
                    <span
                      style={{
                        backgroundColor: "#e6f4ea",
                        color: "#1e7e34",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      Default
                    </span>
                  ) : (
                    <button
                      onClick={() => this.handleMakeDefault(method.id)}
                      style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      Make Default
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserPaymentMethods;
