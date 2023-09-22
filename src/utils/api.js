import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust the base URL to match your backend API
  timeout: 10000,  // Adjust the timeout as needed
  auth: {
    username: 'testuser',  // Replace with your actual username
    password: 'password',  // Replace with your actual password
  },
});

export default instance;
