import axios from 'axios';

//changed path for testing - changed back when done testing
export default axios.create({
    baseURL: 'http://localhost:8080/resttest2/'
});
