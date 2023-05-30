<script setup lang="ts">
	import TaskComponent from './components/TaskComponent.vue'
</script>

<template>
	<div>
		<a href="https://github.com/evgeniy-savenko" target="_blank">
			<img src="./assets/get.png" class="logo" alt="git" />
		</a>
		<a
			href="https://hh.ru/resume/4db4eb9dff07f87ed30039ed1f7254336b324f"
			target="_blank"
		>
			<img src="./assets/hh.png" class="logo vue" alt="hh" />
		</a>
	</div>
	<TaskComponent />
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
