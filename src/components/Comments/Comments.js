import Axios from "../Axios/Axios";
// Function to fetch comments
const fetchComments = () => {
    return Axios.get("/comments")
        .then(response => response.data)
        .catch(error => {
            console.error(error);
        });
}
export default fetchComments;