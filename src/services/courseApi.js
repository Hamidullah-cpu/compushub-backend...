import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/courses";

export function getCourses() {
    return axios.get(API_URL);
}