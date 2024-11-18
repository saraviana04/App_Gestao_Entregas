import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api'  // substitua com o endereço e porta onde seu backend está rodando
});

export default api;

//api.js: Arquivo para configurar a comunicação com a API do backend.