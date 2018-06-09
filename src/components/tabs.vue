<template>
	<div id="helper">
		<!-- 不同类型的todo数量 -->
		<span class="left">2 items left</span>
		<span class="tabs">
			<!-- 绑定事件渲染不同的todo -->
			<span class="button active">all</span>
			<span class="button">active</span>
			<span class="button">completed</span>
		</span>
		<!-- 绑定事件：删除已完成 -->
		<span class="right" @click="clearCompleted">Clear Completed</span>
	</div>
</template>

<script>
	export default {
		method: {
			clearCompleted() {

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