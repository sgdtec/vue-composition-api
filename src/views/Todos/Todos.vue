<template>
    <h1>Lista de Terefas</h1>  

    <div v-if="loading">Carregando...</div> 

    <ul>
        <li v-for="todo in todos" 
            :key="todo.identify">
            {{ todo.title}}
        </li>
    </ul>
</template>

<script>
import TodoService from '@/Services/todos.service'
import { onMounted, ref } from 'vue'

export default {
    name: 'Todos',
    setup() {
        const todos = ref([])

        const loading = ref(false)

        onMounted (() => {
            loading.value = true
            TodoService.getAll()
                .then(response => {
                   todos.value = response.data.data
                })
                .catch(error => console.log(error))
                .finally(() => loading.value = false)
        }) 

        return {
            loading,
            todos
        }
    }
}
</script>