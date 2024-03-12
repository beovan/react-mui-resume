import Axios from "../Axios/Axios";

// Function to fetch posts
const fetchPosts = () => {
    return Axios.get("/posts")
        .then(response => response.data)
        .catch(error => {
            console.error(error);
        });
}
export default fetchPosts;

