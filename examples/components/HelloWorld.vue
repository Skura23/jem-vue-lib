<!--
 * @Author: zxx
 * @Date: 2021-09-30 09:01:37
 * @LastEditors: zxx
 * @LastEditTime: 2021-12-09 13:51:04
 * @FilePath: \styleguidist-vuecli3-demo\examples\components\HelloWorld.vue
 * @Description: some description
-->
<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		
	</div>
</template>



<script>
/**
   * The only true button.
   * @displayName HelloWorld
   */
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>

<docs lang="md">
HelloWorld

## Examples


```jsx
<hello-world></hello-world>
```

</docs>
