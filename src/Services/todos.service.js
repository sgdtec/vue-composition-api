import axios from 'axios'

export default class TodoService {

    static async getAll() {
        return axios.get('/todos')
    }

    static async addTodo(params) {
        return axios.post('/todos', params)
    }

    static async editTodo(id, params) {
        return axios.put(`/todos/${id}`, params)
    }

    //Return Data Update Todo
    static async getTodo(id) {
        return axios.get(`/todos/${id}`)
    }

    //Remove Todo
    static async deleteTodo(id) {
        return axios.delete(`/todos/${id}`)
    }
}