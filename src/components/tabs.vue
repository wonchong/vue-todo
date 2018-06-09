<template>
	<div id="helper">
		<!-- 需要动态计算的数据使用计算属性 -->
		<span class="left">{{getUnCompletedLength}} items left</span>
		<span class="tabs">
			<!-- 多个重复的dom结构使用v-for渲染 -->
			<span 
				v-for="state in states"
				:key="state"
				:class="['button', filter === state ? 'active' : '']" 
				@click="toggleFilter(state)"
			>
				{{state}}
			</span>
		</span>
		<!-- 绑定事件：删除已完成 -->
		<span class="right" @click="clearCompleted">Clear Completed</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				states: ['all', 'active', 'completed']
			}
		},
		props: {
			todos: {
				type: Array,
				required: true
			},
			filter: {
				type: String,
				required: true
			}
		},
		computed: {
			getUnCompletedLength(todos) {
				return this.todos.filter(todo => !todo.completed).length;
			}
		},
		methods: {
			toggleFilter(state) {
				this.$emit('toggle', state);
			},
			clearCompleted() {
				this.$emit('clear');
			}
		}
	}
</script>

<style scoped lang="less">
	#helper {
		box-sizing: border-box;
		padding: 16px;
		line-height: 1.4em;
		text-align: center;
		background-color: #fff;
		border: 1px solid #999;
		color: #ccc;
		box-shadow: 0 0 5px #666;
		.left {
			float: left;
		}
		.tabs {
			margin: 0 auto;
			.button {
				padding: 5px 12px;
			}
			.active {
				border: 1px solid #0f3;
				border-radius: 5px;
			}
		}
		.right {
			float: right;

		}
	}
</style>