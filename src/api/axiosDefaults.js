import axios from "axios";


// axios.defaults.baseURL = 'https://moments-drf-api-app.herokuapp.com'
axios.defaults.baseURL = 'https://8000-mikakallberg-restdjango-vb9oskvgge5.ws-eu59.gitpod.io'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;