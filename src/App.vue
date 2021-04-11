<template>
	<v-app id="app">
		<Header />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	import Header from './components/admin/Header';

	export default {
		name: 'App',

		components: {
			Header,
		},

		data: () => ({
			//
		}),
	};
</script>

<style></style>
