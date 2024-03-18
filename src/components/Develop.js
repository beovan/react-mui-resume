//React
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

//Axios
//local
export const ButtonVisibilityContext = React.createContext();

const Develop = () => {
  const [isButtonVisible, setButtonVisibility] = useState(
    () => JSON.parse(localStorage.getItem("isButtonVisible")) || true
  );

  useEffect(() => {
    localStorage.setItem("isButtonVisible", JSON.stringify(isButtonVisible));
  }, [isButtonVisible]);

  const removeButton = () => {
    localStorage.removeItem("isButtonVisible");
  };
  
  return (
    <Box>
      <h1>Develop Option</h1>
      <ButtonVisibilityContext.Provider
        value={{ isButtonVisible, setButtonVisibility }}
      >
        <div>Hello Again</div>
        {isButtonVisible && <button>Button</button>}
        <button onClick={() => setButtonVisibility(!isButtonVisible)}>
          Toggle Button
        </button>
        <button onClick={removeButton}>Hide Button</button>
      </ButtonVisibilityContext.Provider>
    </Box>
  );
};

export default Develop;
