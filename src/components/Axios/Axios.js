import axios from "axios";

// Create an Axios instance
const Axios = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-type": "application/json"
    }
    
});



export default Axios;