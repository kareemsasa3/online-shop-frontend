import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust the base URL to match your backend API
  timeout: 10000,  // Adjust the timeout as needed
  auth: {
    username: 'image_uploader',  // Replace with your actual username
    password: 'image',  // Replace with your actual password
  },
});

export default instance;
