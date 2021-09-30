<template>
	<div id="app">
		<img src="./assets/logo.png" />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <x-button type="primary">button</x-button> -->
		<car-number></car-number>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'app',
	components: {
		HelloWorld
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
