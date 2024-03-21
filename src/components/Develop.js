//React
import { Box, Button } from "@mui/material";
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
        <div>Display print</div>
        {isButtonVisible && <Button variant="contained" color="success">Button</Button>}
        <Button variant="contained" onClick={() => setButtonVisibility(!isButtonVisible)}>
          Turn on/off Button
        </Button>
      </ButtonVisibilityContext.Provider>
    </Box>
  );
};

export default Develop;
