<template>
    <h1>Lista de Terefas</h1>   

    <ul>
        <li v-for="todo in todos" 
            :key="todo.identify">
            {{ todo.name}}
        </li>
    </ul>
</template>

<script>

export default {
    name: 'Todos',
    setup() {
        const todos = [
            {identify: 1, name: 'task 01', completed: true},
            {identify: 2, name: 'task 02', completed: true},
            {identify: 3, name: 'task 03', completed: true},
            {identify: 4, name: 'task 04', completed: false},
            {identify: 5, name: 'task 05', completed: true}
        ]

        return {
            todos
        }
    }
}
</script>