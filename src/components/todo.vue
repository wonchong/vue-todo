<template>
	<div id="todo">
		<input 
			id="addInput" 
			type="text" 
			name="addInput"
			placeholder="接下来要做什么？" 
			autofocus="" 
			@keyup.enter="addItem()"
		>
		<item :todo="todo"></item>
	</div>
</template>

<script>
import item from './item'

export default {
	name: 'todo',
	data () {
		return {
			todo: {
				id: 0,
				content: 'this is todo',
				completed: false
			}
		}
	},
	components: {
		item
	},
	methods: {
		addItem () {

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