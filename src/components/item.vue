<template>
	<div v-bind:class="['todo-item', todo.completed ? 'completed' : '']">
		<span :class="['toggle', 'iconfont', todo.completed ? 'icon-roundcheck' : 'icon-round']">
			<input type="checkbox" v-model="todo.completed">
		</span>	
		<label>{{ todo.content }}</label>
		<button 
			class="destory"
		 	type="button"
		 	@click="delItem"
	 	></button>
	</div>
</template>

<script>
	
export default {
	data () {
		return {

		}
	},
	props: {
		todo: {
			type: Object,
			required: true
		}
	},
	methods: {
		delItem () {
			// this指item这个组件
			this.$emit('del', this.todo.id);
		}
	}	
}
</script>

<style lang="less" scoped>
	.todo-item {
		position: relative;
		height: 58px;
		background-color :#fff;
		font-size: 24px;
		border: 1px solid #999;
		box-shadow: 0 0 5px #666;
		&:hover {
			.destory:after {
				content: 'x';
			}
		}
		.toggle {
			position: absolute;
			left: 10px;
			width: 40px;
			line-height: 58px;
			height: 100%;
			font-size: 40px;
			input {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				margin auto: 0;
				width: 40px;
				height: 40px;
				border: none;
				appearance: none;
				outline: none;
			}
		}
		label {
			display: block;
			white-space: pre-line;
			word-break: break-all;
			box-size: border-box;
			padding: 15px 60px 15px 15px;
			margin-left: 45px;
			line-height: 1.2;
			transtion: color 0.4s;
		}
		&.completed {
			label {
				color: #dd9d9;
				text-decoration: line-through;
			}
			.toggle {
				color: #1afa29;
			}
		}
		.destory {
			position: absolute;
			top: 0;
			right: 10px;
			bottom: 0;
			width: 40px;
			height: 40px;
			margin: auto 0;
			font-size: 30px;
			color: #cc9a9a;
			margin-bottom: 11px;
			transiton: color 0.2s ease-out;
			background: transparent;
			appearance: none;
			border: 0;
			cursor: pointer;
			outline: none;
		}
	}	
</style>