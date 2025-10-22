import React from 'react';
import Catalogue from './Catalogue';


function App() {
  return (
    <>
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
      <Catalogue />
    </>
  );
}

export default App;