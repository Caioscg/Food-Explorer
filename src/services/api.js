import axios from "axios" // npm install axios

export const api = axios.create({
    //baseURL: "https://foodexplorer-api-ubq3.onrender.com" //! prod
    baseURL: "http://localhost:3333" //* dev
})