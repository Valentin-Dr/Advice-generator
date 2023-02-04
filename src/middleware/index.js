import axios from "axios";

const API = axios.create({baseURL: 'https://api.adviceslip.com/advice'});

export default API;