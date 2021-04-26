<template>
	<v-container id="start">
		<StartNav />

		<v-form class="mt-15 pt-15 approve_form">
			<v-checkbox
				dark
				class="text-h6 mt-10"
				v-model="agreed"
				label="Подтверждаю завершение успешной рассылки запросов на вывод Дивидендов и Депозитов по Юзерам"
				:full-width="false"
			></v-checkbox>
			<v-checkbox
				dark
				class="text-h6 mt-10"
				v-model="agreed2"
				label="Подтверждаю полный приход денег на Инструмент со сбора Пула"
				:full-width="false"
			></v-checkbox>

			<v-btn class="px-15 py-8 font-weight-bold mt-10 text-h6" light>
				Архивировать Цикл
			</v-btn>
		</v-form>
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
			return {
				agreed: false,
				agreed2: false,
				summ: 0,
			};
		},
		created() {},
	};
</script>

<style scoped lang="scss">
	.approve_form {
		max-width: 1550px;
		margin: 0 auto;
	}
</style>
