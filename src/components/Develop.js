import React, { useState, useEffect } from 'react';

export const ButtonVisibilityContext = React.createContext();

const Develop = () => {
    const [isButtonVisible, setButtonVisibility] = useState(
        () => JSON.parse(localStorage.getItem('isButtonVisible')) || true
    );

    useEffect(() => {
        localStorage.setItem('isButtonVisible', JSON.stringify(isButtonVisible));
    }, [isButtonVisible]);

    const removeButton = () => {
        localStorage.removeItem('isButtonVisible');
    };

    return (
        <ButtonVisibilityContext.Provider value={{ isButtonVisible, setButtonVisibility }}>
            <div>Hello Again</div>
            {isButtonVisible && <button>Button</button>}
            <button onClick={() => setButtonVisibility(!isButtonVisible)}>
                Toggle Button
            </button>
            <button onClick={removeButton}>
                Remove from Local Storage
            </button>
        </ButtonVisibilityContext.Provider>
    );
}

export default Develop;