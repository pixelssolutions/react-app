import axios from "axios";

const ApiManager=axios.create({
baseURL: 'http://ec2-44-203-198-42.compute-1.amazonaws.com:8084',
responseType:'json',
withCredentials:true
});

export default ApiManager;