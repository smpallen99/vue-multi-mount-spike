<script setup>
	const items = [
		{ name: 'Item 1', to: '#' },
		{ name: 'Item 2', to: '#' },
		{ name: 'Item 3', to: '#' },
		{ name: 'Item 4', to: '#' },
	]
</script>

<template>
	<ul>
		<li v-for="item in items">
			{{ item.name }}
		</li>
	</ul>
</template>