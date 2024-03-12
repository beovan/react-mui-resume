//React
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

//Axios
// import Axios from './Axios/Axios';  
import fetchPosts from './Posts/Posts';
//local
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
//Axios
const [posts, setPosts] = useState([]);

useEffect(() => {
    fetchPosts().then(data => {
        setPosts(data);
    });
}, []);

    return (
        <Box>
        <h1>Develop Option</h1>
            <ButtonVisibilityContext.Provider value={{ isButtonVisible, setButtonVisibility }}>
            <div>Hello Again</div>
            {isButtonVisible && <button>Button</button>}
            <button onClick={() => setButtonVisibility(!isButtonVisible)}>
                Toggle Button
            </button>
            <button onClick={removeButton}>
                Hide Button
            </button>
        </ButtonVisibilityContext.Provider>
        <h1>Posts</h1>
        <div>
        {posts.map((item) => (
    <tr key={item.id}>
        <td>{item.title}</td>
        <td>{item.views} views</td>
    </tr>
))}
    </div>
        </Box>
    );
}

export default Develop;