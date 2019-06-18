import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://burger-builder-34f5b.firebaseio.com/'

});

export default instance;