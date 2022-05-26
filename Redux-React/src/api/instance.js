import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:1100/api"
})

export default instance