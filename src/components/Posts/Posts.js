import Axios from "../Axios/Axios";

// Function to fetch posts
const fetchProfile = () => {
    return Axios.get("/profile")
        .then(response => response.data)
        .catch(error => {
            console.error(error);
        });
}
export default fetchProfile;

