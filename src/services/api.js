import axios from "axios";

const api = axios.create({
    baseURL: "https://pk-finder-api.vercel.app/"
})

export default api;