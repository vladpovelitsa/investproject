<template>
	<v-container id="start">
		<StartNav class="mb-15 pb-15" />

		<div
			class="d-flex align-center justify-center routed-10 mx-auto icon-wrapper mt-15 mb-10"
		>
			<v-icon size="200px" color="#f3f4f4"> mdi-check </v-icon>
		</div>
		<h4 class="text-h4 text-center text-capitalize">To the moon</h4>
	</v-container>
</template>

<script>
	import StartNav from './StartNav';
	export default {
		name: 'DividendsUser',
		components: {
			StartNav,
		},
		data() {
			return {};
		},
		created() {},
	};
</script>

<style scoped lang="scss">
	.icon-wrapper {
		border: 12px solid #b1b3b5;
		border-radius: 50%;
		width: 310px;
		height: 310px;
	}
</style>
