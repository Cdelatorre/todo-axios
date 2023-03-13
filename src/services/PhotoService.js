import http from "./BaseService";

export const list = () => http.get('/photos')