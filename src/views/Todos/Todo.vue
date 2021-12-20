<template>
    <div>
        <input type="checkbox" :checked="completed" @change="toogleStatus">
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{name: 'todos.edit', params: {id: todo.identify}}">Edit</router-link> -
        <a href="#" @click.prevent="deleteTodo">Deletar</a>
    </div>
</template>

<script>
import { computed } from 'vue'
import TodoService from '@/Services/todos.service'
export default {
    name: 'Todo',
    props: {
        todo: {
            require: true,
            type: Object,
        }
    },
    setup(props, {emit}) {
        const completed = computed(() => props.todo.completed == 'S')
        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                        .then(() => emit('todoDeleted', props.todo))
        }
        const toogleStatus = () => {
            const todo = props.todo
            const params = {
                name: todo.title,
                description: todo.body,
                completed: !completed.value
            }
            TodoService.editTodo(props.todo.identify, params)
                        .then(() => emit('todoUpdated', params))
        }
        return {
            deleteTodo,
            completed,
            toogleStatus
        }
    }
}
</script>