import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a5edc-default-rtdb.firebaseio.com/'
});

export default instance;