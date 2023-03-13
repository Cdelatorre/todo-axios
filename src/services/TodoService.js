import http from "./BaseService";

export const list = () => http.get('/todos')

export const getTodoById = (id) => http.get(`/todos/${id}`)
