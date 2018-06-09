<template>
	<div id="todo">
		<input 
			id="addInput" 
			type="text" 
			name="addInput"
			placeholder="接下来要做什么？" 
			autofocus="" 
			@keyup.enter="addItem"
		>
		<item :todo="todo"
			v-for="todo in filtedTodos"
			:key="todo.id"
			@del="delItem"
		/>
		<tabs 
			:todos="todos"
			:filter="filter"
			@toggle="toggleFilter"
			@clear="clearCompleted"
		/>
	</div>
</template>

<script>
import item from './item'
import tabs from './tabs'

let id = 0;

// 数据和数据操作尽量放在顶层组件
export default {
	name: 'todo',
	data () {
		return {
			todos: [],
			filter: 'all'
		}
	},
	components: {
		item,
		tabs
	},
	computed: {
		filtedTodos() {
			if (this.filter === 'all') {
				return this.todos;
			}

			const completed = this.filter === 'completed';
			return this.todos.filter(todo => todo.completed === completed);

		}
	},
	methods: {
		addItem (e) {
			// 此处的参数e事件对象，不需要再绑定事件时传入
			let todoInput = e.target;
			this.todos.unshift({
				id: id++,
				content: todoInput.value.trim(),
				completed: false
			});
			todoInput.value = '';
		},
		delItem(id) {
			let todos = this.todos;
			todos.splice(todos.findIndex(todo => todo.id === id), 1);
		},
		toggleFilter(state) {
			this.filter = state;
			
		},
		clearCompleted() {
			this.todos = this.todos.filter(todo => !todo.completed);
		}
	}
}
</script>

<!-- scoped 限制作用域在组件内 -->
<style scoped lang="less">
#todo {
	width: 600px;
	margin: auto;
	#addInput {
		position: relative;
		width: 100%;
		font-size: 24px;
		line-height: 1.4em;
		outline: none;
		border: 1px solid #999;
		box-sizing: border-box;
		box-shadow: 0 0 5px #666;
		padding: 16px;
	}
}
</style>